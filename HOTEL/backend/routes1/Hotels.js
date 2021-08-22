const express = require("express");
const hotelRouter = express.Router();
const Hotels = require("../ModelsDB/Hotels");

hotelRouter.post("/create", (req, res) => {
    const { hotelname, url1, url2, url3, url4, hoteladdress, price, rating, lattitude, langitude, discription, available} = req.body;
    console.log(req.body);
    Hotels.findOne({}, (err, hotel) => {
        const newhotel = new Hotels({ hotelname, url1, url2, url3, url4, hoteladdress, price, rating, lattitude, langitude, discription, available});
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
    .select('_id hotelname url1 url2 url3 url4 hoteladdress price rating lattitude langitude discription available')
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
  });
module.exports = hotelRouter;