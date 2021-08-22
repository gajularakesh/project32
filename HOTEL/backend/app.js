const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
app.use(cookieParser());
app.use(express.json());

mongoose.connect(
  "mongodb://localhost:27017/hotel",
  {useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("successfully connected to database");
  }
);

// const userRouter = require("./routes/User");
// app.use("/user", userRouter);

// const hotelRouter = require("./routes/Hotels");
// app.use("/hotel", hotelRouter);

// const BookingRouter = require("./routes/Booking");
// app.use("/Booking", BookingRouter); 

const userRouter = require("./routes1/User");
app.use("/user", userRouter);

const hotelRouter = require("./routes1/Hotels");
app.use("/hotel", hotelRouter);

const BookingRouter = require("./routes1/Booking");
app.use("/Booking", BookingRouter); 


app.listen(6000, () => {
  console.log("express server started");
});
