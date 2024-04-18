const express = require("express");
const BookingController = require("../controllers/BookingController");
const { authenticateUser } = require("../middlewares/authMiddleware");
const router = express.Router();
const bookingSwagger = require('../swagger/bookingSwagger');
router.swagger = bookingSwagger;


router.post("/book", authenticateUser, BookingController.bookService);
router.get("/checkout/:id", authenticateUser,BookingController.CheckoutSession);

module.exports = router;
