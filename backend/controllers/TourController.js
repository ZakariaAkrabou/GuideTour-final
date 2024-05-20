// controllers/tourController.js
const Tour = require('../models/Tour');
const cloudinary = require('../configs/cloudinary');
const Guide = require('../models/guide');

exports.createTour = async (req, res) => {
    try {
      
        if (!req.file) {
            return res.status(400).send({ error: 'Tour image is required' });
        }

         const guide_id = req.user._id;
        
         const resultImg = await cloudinary.uploader.upload(req.file.path, { folder: 'uploads' });
         const tour = new Tour({
            title: req.body.title,
            guide_id: guide_id,
            description: req.body.description,
            image: resultImg.secure_url, 
            category: req.body.category,
            duration: req.body.duration,
            price: req.body.price
        });
        await tour.save();

        res.status(200).send({ message: "Tour created successfully", data: tour });
    } catch (error) {
        console.log('error while creating tour :', error);
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
        res.status(200).json(tour);
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
      
        
        if (req.file && tour.image) {
            await cloudinary.uploader.destroy(getPublicId(tour.image));
        }

        
        if (req.file) {
            const resultImg = await cloudinary.uploader.upload(req.file.path, { folder: 'uploads' });
            tour.image = resultImg.secure_url;
        }

      
        updates.forEach(update => tour[update] = req.body[update]);
        await tour.save();

        res.status(200).json({ message: "Update successful!", data: tour });
    } catch (error) {
        console.error('Error updating tour:', error);
        res.status(400).json(error);
    }
};

function getPublicId(url) {
    const startIndex = url.lastIndexOf("/") + 1;
    const endIndex = url.lastIndexOf(".");
    return url.substring(startIndex, endIndex);
}


exports.deleteTour = async (req, res) => {
    try {
        
        if (req.user.role !== 'guide') {
            return res.status(403).json({ error: 'You must be a guide to delete a tour' });
        }

        const tour = await Tour.findByIdAndDelete(req.params.id);
        if (!tour) {
            return res.status(404).json({ error: 'Tour not found' });
        }
        
        res.status(200).json({message:"tour deleted successfuly",data:tour});
    } catch (error) {
        res.status(500).json(error);
    }
};

exports.relatedGuide = async (req, res) => {
    try {
        const { tourName } = req.params;
    
        if (!tourName) {
          return res.status(400).json({ message: 'Tour name is required' });
        }
    
    
        const tour = await Tour.findOne({ title: tourName }).populate('guide_ids');
    
        if (!tour) {
          return res.status(404).json({ message: 'Tour not found' });
        }
    
        const guides = tour.guide_ids;
    
        console.log('Tour:', tour);
        console.log('guide_ids:', tour.guide_ids);
    
        if (!guides || guides.length === 0) {
          return res.status(404).json({ message: 'No guides found for this tour' });
        }
    
        res.status(200).json(guides);
      } catch (error) {
        console.error('Error fetching related guides:', error);
        res.status(500).json({ message: 'Internal server error' });
      }
  };
