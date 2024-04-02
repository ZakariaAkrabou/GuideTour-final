const express = require("express");

//configs
const connectDB = require("./configs/database");
const socket = require('./configs/socket');
const userRoutes = require("./routes/userRoute");
const tourRoutes = require("./routes/tourRoute");
const campingRoutes = require("./routes/campingRoute");
const adminRoutes = require("./routes/adminRoute");
const bookingRoutes = require("./routes/bookingRoute"); 
const reviewRoutes = require("./routes/reviewRoute"); 
const paymentRoutes = require("./routes/paymentRoute"); 
const AuthRoute = require('./routes/AuthRoute')
const socketRoutes = require('./routes/socketRoute');

const initializeSocket = require('./controllers/ChatController')
const http = require('http');
// const path = require('path');
// const guideRoutes = require("./routes/guideRoute");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());



connectDB();

app.use("/api/auth",  AuthRoute);
app.use("/api/users", userRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/tours", tourRoutes);
app.use("/api/camping", campingRoutes);
app.use("/api/booking", bookingRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/chat", socketRoutes);
// app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', (req,res)=>{
//   res.send("Welcome")
// })
//


//Socket Server
const server = http.createServer(app);
initializeSocket(server);

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
