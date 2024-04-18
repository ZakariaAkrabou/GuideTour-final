// controllers/tourController.js
const Tour = require('../models/tour');
// const Guide = require('../models/guide');

exports.createTour = async (req, res) => {
    try {
        
        if (!req.user) {
            return res.status(401).send({ error: 'You must be logged in to create a tour' });
        }

      
        if (req.user.role !== 'guide') {
            return res.status(403).send({ error: 'You must be a guide to create a tour' });
        }

        const tour = new Tour(req.body);
        await tour.save();

        res.status(200).send({ message: "Tour created successfully", data: tour });
    } catch (error) {
        res.status(400).send(error);
    }
};


exports.getAllTours = async (req, res) => {
    try {
    
        if (req.user.role !== 'guide') {
            return res.status(403).json({ error: 'You must be a guide to retrieve tours' });
        }

        const tours = await Tour.find({ guide_id: req.user._id });
        
        if (tours.length === 0) {
            return res.status(404).json("No tours found.");
        }
        
        res.json(tours);
    } catch (error) {
        res.status(500).json(error);
    }
};


exports.getTourById = async (req, res) => {
    try {
        const tour = await Tour.findById(req.params.id);
        if (!tour) {
            return res.status(404).json({ error: 'Tour not found' });
        }
        res.status(200).json({message:"tour added successfuly", data: tour});
    } catch (error) {
        res.status(500).json(error);
    }
};

exports.updateTour = async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['title', 'description', 'image', 'category', 'duration', 'price'];
    const isValidOperation = updates.every(update => allowedUpdates.includes(update));

    if (!isValidOperation) {
        return res.status(400).json({ error: 'Invalid updates!' });
    }

    try {
      
        if (req.user.role !== 'guide') {
            return res.status(403).json({ error: 'You must be a guide to update a tour' });
        }

        const tour = await Tour.findById(req.params.id);
        if (!tour) {
            return res.status(404).json({ error: 'Tour not found' });
        }

        updates.forEach(update => tour[update] = req.body[update]);
        await tour.save();

        res.status(200).json({message:"Update successful!", data: tour});
    } catch (error) {
        res.status(400).json(error);
    }
};


exports.deleteTour = async (req, res) => {
    try {
        
        if (req.user.role !== 'guide') {
            return res.status(403).json({ error: 'You must be a guide to delete a tour' });
        }

        const tour = await Tour.findByIdAndDelete(req.params.id);
        if (!tour) {
            return res.status(404).json({ error: 'Tour not found' });
        }
        
        res.send(200).json({message:"tour deleted successfuly",data:tour});
    } catch (error) {
        res.status(500).json(error);
    }
};

