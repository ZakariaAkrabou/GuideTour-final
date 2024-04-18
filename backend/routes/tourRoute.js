const express = require("express");
const router = express.Router();
const tourController = require('../controllers/TourController');
const {authenticateUser,isGuide} = require('../middlewares/authMiddleware')
const tourSwagger = require('../swagger/tourSwagger');
router.swagger = tourSwagger;

router.post('/create',authenticateUser,isGuide, tourController.createTour);
router.get('/allTours', authenticateUser,tourController.getAllTours);
router.get('/getTour/:id', authenticateUser,tourController.getTourById);
router.put('/updateTour/:id', authenticateUser,isGuide,tourController.updateTour);
router.delete('/deleteTour/:id', authenticateUser,isGuide,tourController.deleteTour);

module.exports = router;
