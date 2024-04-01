const express = require("express");
const BookingController = require("../controllers/BookingController");
const { authenticateUser } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/book", authenticateUser, BookingController.bookService);
router.get("/checkout/:id", BookingController.CheckoutSession);

module.exports = router;
