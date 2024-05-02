const Camping = require("../models/Camping");

module.exports.createComping = async (req, res) => {
  const {
    name,
    location,
    date,
    duration,
    group_member,
    isPrivate,
    price,
    description,
  } = req.body;

  try {
    const existingCamping = await Camping.findOne({
      name,
      location,
      date,
      duration,
      group_member,
      isPrivate,
      price,
      description,
    });
    if (existingCamping) {
      return res
        .status(400)
        .json({
          message: "A camping event with the same information already exists.",
        });
    }
    const newCamping = new Camping({
      name,
      location,
      date,
      duration,
      group_member,
      isPrivate,
      price,
      description,
    });

    await newCamping.save();

    res.status(200).json({
      message: "Camping event added successfully",
      data: newCamping.toObject({ getters: true, versionKey: false }),
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports.getAllCampings = async (req, res) => {
  try {
    const campings = await Camping.find();
    res.status(200).json(campings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports.updateCamping = async (req, res) => {
  try {
    const camping = req.params.campingId;
    const updates = req.body;

    const editcamping = await Camping.findByIdAndUpdate(camping, updates, {
      new: true,
    });
    if (!editcamping) {
      return res.status(404).send({ error: "Camping not found" });
    }
    res
      .status(200)
      .json({ message: "camping edited successfuly", data: editcamping });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
module.exports.getCamping = async (req, res) => {
  try {
    const camping = req.params.campingId;
    const camp = await Camping.findById(camping)
    if (!camp) {
      return res.status(404).send({ error: "Camping not found" });
    }
    res
      .status(200)
      .json(camp);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports.deleteCampingById = async (req, res) => {
  try {
    const camping = await Camping.findByIdAndDelete(req.params.id);
    if (!camping) {
      return res.status(404).json({ message: "Product not found" });
    }
    //res.json(camping);
    res.status(200).json({ message: "Camping deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports.sortCampingsAscending = async (req, res) => {
  try {
    const sortedCampings = await Camping.find().sort({ price: 1 }).exec();
    res
      .status(200)
      .json({ message: "sort Ascending  done success", data: sortedCampings });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
module.exports.sortCampingsDescending = async (req, res) => {
  try {
    const sortedCampingsDescending = await Camping.find()
      .sort({ price: -1 })
      .exec();
    res.status(200).json({
      message: "sort Decending  done success",
      data: sortedCampingsDescending,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
module.exports.filterCampingByName = async (req, res) => {
  try {
    const { name } = req.query;
    console.log(name);
    const filter = { name: name };
    const filteredCampings = await Camping.find(filter);
    if (filteredCampings.length === 0) {
      return res.status(404).json({ message: "Camping not found." });
    }
    res
      .status(200)
      .json({ message: "filter done successfuly ", data: filteredCampings });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: err.message });
  }
};
