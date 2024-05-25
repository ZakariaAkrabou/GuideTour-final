const Tour = require("../models/Tour");
const Camping = require("../models/Camping");
const Booking = require("../models/Booking");
const Stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.CheckoutSession = async (req, res) => {
  try {
    const bookingId = req.params.id;
    console.log("Booking ID:", bookingId);

    const booking = await Booking.findById(bookingId)
      .populate("tour")
      .populate("camping");
    console.log("Booking:", booking);

    if (!booking) {
      return res.status(404).json({ error: "Booking not found" });
    }

    let bookingType;
    let bookingDetails;

    if (booking.tour) {
      bookingType = "tour";
      bookingDetails = await Tour.findById(booking.tour);
    } else if (booking.camping) {
      bookingType = "camping";
      bookingDetails = await Camping.findById(booking.camping);
    } else {
      return res
        .status(400)
        .json({ error: "Invalid booking type or missing data" });
    }
    console.log("Booking Type:", bookingType);
    console.log("Booking Details:", bookingDetails);

    if (!bookingDetails) {
      return res.status(400).json({ error: "Failed to retrieve booking details" });
    }

    const session = await Stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      success_url: `${process.env.CLIENT_SITE_URL}/checkout-success`,
      cancel_url: `${req.protocol}://${req.get("host")}/bookings/${bookingId}/cancel`,
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: bookingType === "tour" ? bookingDetails.title : bookingDetails.location,
              description: bookingType === "tour" ? bookingDetails.description : null,
            },
            unit_amount: booking.price * 100,
          },
          quantity: 1,
        },
      ],
    });

    console.log("Session:", session);

    res.status(200).json({ sessionId: session.id, bookingType });
  } catch (err) {
    console.error("Error creating checkout session:", err);
    res.status(500).json({ error: "Failed to create checkout session" });
  }
};

exports.bookService = async (req, res) => {
  try {
    const { serviceType, serviceId, date, price } = req.body;
    console.log("Received request:", req.body);

    const user = req.user;

    if (serviceType !== "tour" && serviceType !== "camping") {
      return res.status(400).json({ error: "Invalid service type" });
    }

    let bookingData = {
      user: user._id,
      date,
      price,
      status: "pending",
      isPaid: false,
    };

    if (serviceType === "tour") {
      bookingData.tour = serviceId;
      bookingData.camping = undefined;
    } else if (serviceType === "camping") {
      bookingData.camping = serviceId;
      bookingData.tour = undefined;
    }

    const newBooking = new Booking(bookingData);

    await newBooking.save();
    console.log("New booking saved:", newBooking);

    res.status(200).json({ message: "Your booking is done. Wait for checkout.", bookingId: newBooking._id });
  } catch (err) {
    console.error("Error booking service:", err);
    res.status(500).json({ error: "Failed to book service" });
  }
};

const createPaymentIntent = async (amount, description) => {
  try {
    const paymentIntent = await Stripe.paymentIntents.create({
      amount: amount * 100, 
      currency: "usd",
      description: description,
      automatic_payment_methods: {
        enabled: true,
      },
    });

    return paymentIntent;
  } catch (error) {
    console.error("Error creating payment intent:", error);
    throw error;
  }
};
exports.createBooking = async (req, res) => {
  try {
    const booking = new Booking(req.body);

    const paymentIntent = await createPaymentIntent(req.body.price, "Tour/Camping Booking");
    booking.paymentIntentId = paymentIntent.id;

    const paymentMethod = req.body.payment_method;

    await Stripe.paymentIntents.confirm(paymentIntent.id, {
      payment_method: paymentMethod,
    });

    await booking.save();
    res.status(201).json({ message: "Booking created successfully", booking });
  } catch (error) {
    console.error("Error creating booking:", error);
    res.status(500).json({ error: "Error creating booking" });
  }
};