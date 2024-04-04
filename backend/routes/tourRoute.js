const express = require("express");
const router = express.Router();
const tourController = require('../controllers/TourController');
const {authenticateUser} = require('../middlewares/authMiddleware')


router.post('/create',authenticateUser, tourController.createTour);
router.get('/allTours', authenticateUser,tourController.getAllTours);
router.get('/getTour/:id', authenticateUser,tourController.getTourById);
router.put('/updateTour/:id', authenticateUser,tourController.updateTour);
router.delete('/deleteTour/:id', authenticateUser,tourController.deleteTour);

module.exports = router;
