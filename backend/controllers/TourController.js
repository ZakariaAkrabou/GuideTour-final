// controllers/tourController.js
const Tour = require('../models/tour');
// const Guide = require('../models/guide');

exports.createTour = async (req, res) => {
    try {
      
        if (!req.file) {
            return res.status(400).send({ error: 'Tour image is required' });
        }
        const guide_id = req.user._id;
        const imagepath = req.file.path;

         const tour = new Tour({
            title: req.body.title,
            guide_id: guide_id,
            description: req.body.description,
            image: imagepath, 
            category: req.body.category,
            duration: req.body.duration,
            price: req.body.price
        });
        await tour.save();

        res.status(200).send({ message: "Tour created successfully", data: tour });
    } catch (error) {
        res.status(400).send(error);
    }
};


exports.getGuideTours = async (req, res) => {
    try {
        if (req.user.role !== 'guide') {
            return res.status(403).json({ error: 'You must be a guide to retrieve tours' });
        }

        const tours = await Tour.find({ guide_id: req.user._id });
        console.log("tours", tours);
        console.log("id", req.user._id); 

        if (tours.length === 0) {
            return res.status(404).json("No tours found.");
        }
        
        res.status(200).json(tours);
    } catch (error) {
        res.status(500).json(error);
    }
};

exports.getAllTours = async(req,res) =>{
    try {
        const tours = await Tour.find()
        if (tours.length === 0) {
            return res.status(404).json("No tours found.");
        }
        
        console.log("All Tours", tours);
        return res.status(201).json(tours)
    } catch (error) {
        res.status(500).json(error);
    }
}



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
        const tour = await Tour.findById(req.params.id);
        if (!tour) {
            return res.status(404).json({ error: 'Tour not found' });
        }

        if (req.file) {
            tour.image = req.file.path;
        }

        updates.forEach(update => tour[update] = req.body[update]);
        await tour.save();

        res.status(200).json({ message: "Update successful!", data: tour });
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

