const Camping = require('../models/Camping');


module.exports.createComping = async (req, res) => {
    const camping = new Camping({
        name: req.body.name,
        location: req.body.location,
        date: req.body.date,
        duration: req.body.duration,
        group_member: req.body.group_member,
        isPrivate: req.body. isPrivate,
        price:req.body.price,
        description: req.body.description,
        
    })
    try {
        const newCamping = await camping.save();
        res.status(201).json({message:"camping added successfuly ", data:newCamping});
    } catch (err) {
        res.status(400).json({ message: err.message });
    }};

    module.exports.getAllCampings = async (req, res) => {
        try {
            
            const campings = await Camping.find();
            res.json(campings);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    };

    module.exports.updateCamping = async (req, res) => {
        try {
            const camping= req.params.campingId;
            const updates = req.body;
    
        
            const editcamping = await Camping.findByIdAndUpdate(camping, updates, { new: true });
            if (!editcamping) {
              return res.status(404).send({ error: "Camping not found" });
            }
            res.json(editcamping );
          } catch (error) {
            res.status(500).send(error.message);
          }
    };
    
    module.exports.deleteCampingById = async (req, res) => {
        try {
            const camping = await Camping.findByIdAndDelete(req.params.id);
            if (!camping) {
                return res.status(404).json({ message: 'Product not found' });
            }
            //res.json(camping);
            res.json({ message: 'Camping deleted' });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    };

    module.exports.sortCampingsAscending = async (req, res) => {
        try {
            const sortedCampings = await Camping.find().sort({ price: 1 }).exec(); 
            res.json(sortedCampings);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    };
    module.exports.sortCampingsDescending = async (req, res) => {
        try {
            const sortedCampingsDescending = await Camping.find().sort({ price: -1 }).exec(); 
            res.json(sortedCampingsDescending );
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
                return res.status(404).json({ message: 'Camping not found.' });
              }
            res.json(filteredCampings);
            
          } catch (error) {
            console.error(error.message);
            res.status(500).json({ message: err.message });
          }
        
        
        
        };
        
        
    