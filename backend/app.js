const express = require("express");
const connectDB = require("./configs/database");
const userRoutes = require("./routes/userRoute");
const guideRoutes = require("./routes/guideRoute");
const tourRoutes = require("./routes/tourRoute");
const campingRoutes = require("./routes/campingRoute");
const adminRoutes = require("./routes/adminRoute");
const bookingRoutes = require("./routes/bookingRoute"); 
const reviewRoutes = require("./routes/reviewRoute"); 
const paymentRoutes = require("./routes/paymentRoute"); 
const AuthRoute = require('./routes/AuthRoute')

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

connectDB();


// app.use("/api",logingRoute);
app.use("/api/auth",  AuthRoute);
app.use("/api/users", userRoutes);
app.use("/api/guides", guideRoutes);
app.use("/api/tours", tourRoutes);
app.use("/api/camping", campingRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/reviews", reviewRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
