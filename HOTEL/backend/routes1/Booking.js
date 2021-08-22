const express = require("express");
const BookingRouter = express.Router();
const Booking = require("../ModelsDB/Booking");

BookingRouter.post("/Book", (req, res) => {
    const { userID, hotelID, Indate, Outdate, Rooms, Amount, PaymentID, PaymentStatus} = req.body;
    console.log(req.body);
    Booking.findOne({}, (err, hotel) => {
        const newBooking = new Booking({  userID, hotelID, Indate, Outdate, Rooms, Amount, PaymentID, PaymentStatus});
        newBooking.save(err=>{
          if(err)
            res.status(500).json({message:{msgBody: "error has occured3", msgError: true }});
          else
            res.status(201).json({message:{msgBody: "hotel successfully Booked", msgError: false}});
        });
    })
});

BookingRouter.get('/',(req,res)=>{
    Booking.find({})
    .select()
    .exec()
    .then(Booking => {
        res.status(200).json({
            Booking:Booking
        });
    })
    .catch(er => {
        res.status(500).json({
            error: er
        });
    })
});

// BookingRouter.get('/:id', (req, res)=>{
//     const id = req.params.id;
//     Booking.findOne({ "userId":id }, (err, Booking) => {
//         if(Booking)
//         {
//             res.status(201).json({message:Booking})
//         }
//     })
// });

BookingRouter.get('/user/:id',(req,res)=>{
    const id = req.params.id;
    Booking.find({"userID":id }).populate('hotelID')
    .exec(function (err, user) {
        res.status(200).json({
            user:user
        });
      });
});

BookingRouter.get('/hotel/:id',(req,res)=>{
    const id = req.params.id;
    console.log(id);
    Booking.find({"hotelID":id }).populate('userID')
    .exec(function (err, Hotel) {
        res.status(200).json({
            Hotel:Hotel
        });
      });
});

module.exports = BookingRouter;

