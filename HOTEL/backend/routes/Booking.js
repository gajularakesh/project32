const express = require("express");
const BookingRouter = express.Router();
const Booking = require("../models/Booking");

BookingRouter.post("/Book", (req, res) => {
    const { userId, hotelId, Indate, Outdate, Payment} = req.body;
    console.log(req.body);
    Booking.findOne({}, (err, hotel) => {
        const newBooking = new Booking({  userId, hotelId, Indate, Outdate, Payment});
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
    .select('_id userId hotelId Indate Outdate')
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

BookingRouter.get('/:id',(req,res)=>{
    const id = req.params.id;
    Booking.find({"userId":id }).populate('hotelId')
    //.select('hotelId Indate Outdate Payment')
    // .exec()
    // .then(Booking => {
    //     res.status(200).json({
    //         Booking:Booking
    //     });
    // })
    // .catch(er => {
    //     res.status(500).json({
    //         error: er
    //     });
    // })
    .exec(function (err, Hotels) {
        res.status(200).json({
            Hotels:Hotels
        });
        // prints "The author is Ian Fleming"
      });
});

module.exports = BookingRouter;

