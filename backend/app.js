const express = require("express");
const connectDB = require("./configs/database");
const adminRoutes = require("./routes/adminRoute");
const userRoutes = require("./routes/userRoute");
const tourRoutes = require("./routes/tourRoute");
const campingRoutes = require("./routes/campingRoute");
const bookingRoutes = require("./routes/bookingRoute");
const reviewRoutes = require("./routes/reviewRoute");
const paymentRoutes = require("./routes/paymentRoute");
const socketRoutes = require('./routes/socketRoute');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./helpers/swagger');
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

connectDB();

app.use("/api/users", userRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/tours", tourRoutes);
app.use("/api/camping", campingRoutes);
app.use("/api/booking", bookingRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/chat", socketRoutes);

// API Documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
module.exports = app;