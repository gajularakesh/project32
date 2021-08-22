const express = require("express");
const hotelRouter = express.Router();
const Hotels = require("../models/Hotels");

// hotelRouter.post('/create',(req, res) => {
//     const Hotel = new Hotel({
//         _id: new mongoose.Types.ObjectId(),
//         hotelname: req.body.hotelname,
//         hotelurl: req.body.hotelurl,
//         hoteladdress: req.body.hoteladdress,
//         price: req.body.price,
//         rating: req.body.rating,
//         lattitude: req.body.lattitude,
//         langitude: req.body.langitude,
//     });
//     Hotel.save()
//     .then(product => {
//         res.status(201).json({
//             message: product
//         });
//     })
//     .catch(er => {
//         res.status(500).json({
//             error: er
//         });
//     })

// });
hotelRouter.post("/create", (req, res) => {
    const { hotelname, hotelurl, hoteladdress, price, rating, lattitude, langitude} = req.body;
    console.log(req.body);
    Hotels.findOne({}, (err, hotel) => {
        const newhotel = new Hotels({ hotelname, hotelurl, hoteladdress, price, rating, lattitude, langitude});
        newhotel.save(err=>{
          if(err)
            res.status(500).json({message:{msgBody: "error has occured3", msgError: true }});
          else
            res.status(201).json({message:{msgBody: "hotel successfully created", msgError: false}});
        });
      })
    });

hotelRouter.get('/',(req,res)=>{
    Hotels.find({})
    .select('_id hotelname hotelurl hoteladdress price rating lattitude langitude ')
    .exec()
    .then(Hotels => {
        res.status(200).json({
            Hotels:Hotels
        });
    })
    .catch(er => {
        res.status(500).json({
            error: er
        });
    })
});
hotelRouter.get('/:id', (req, res)=>{
    const id = req.params.id;
    Hotels.findOne({ "_id":id }, (err, hotel) => {
        if(hotel)
        {
            res.status(201).json({message:hotel})
        }
    })
//     // Hotels.findone({"_id":id})
//     // .select('_id hotelname hotelurl hoteladdress price rating lattitude langitude ')
//     // .exec()
//     // .then(Hotel => {
//     //     res.status(200).json({
//     //         Hotel:Hotel
//     //     });
//     // })
//     // .catch(er => {
//     //     res.status(500).json({
//     //         error: er
//     //     });
//     Hotels.findone({
//         "_id":id
//     },
//     function(err, hotel) {
//         res.send(hotel);
//         console.log(hotel)
//     }
//     )
// //     User.findOne({ email }, (err, user) => {
// //         //something went wrong with database
// //         if (err) 
// //           return done(err);
// //         //if no user exist
// //         if (!user) 
// //           return done(null, false);
  });
module.exports = hotelRouter;