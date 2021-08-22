const express = require("express");
const userRouter = express.Router();
const passport = require("passport");
const passportConfig = require("../passport");
const crypto = require('crypto')
const bcrypt = require('bcrypt')
const JWT = require("jsonwebtoken");
const User = require("../ModelsDB/User");
const nodemailer = require('nodemailer')
const sendgridTransport = require('nodemailer-sendgrid-transport')
const {SENDGRID_API,EMAIL} = require('../config/keys')

const signToken = userID =>{
    return JWT.sign({
      iss: "Noobcoder",
      sub: userID
    }, "NoobCoder",{expiresIn:"1h"});
}

const transporter = nodemailer.createTransport(sendgridTransport({
  auth:{
      api_key:"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"
  }
}))

userRouter.post("/register", (req, res) => {
  const { username, email, phone, password} = req.body;
  console.log(req.body);
  User.findOne({email}, (err, user) => {
    if (err)
      res.status(500).json({ message: { msgBody: "error has occured1", msgError: true }});
    if (user)
      res.status(400).json({ message: { msgBody: "Email is already taken, please use another email", msgError: true }});
    else{
      const newUser = new User({username, email, phone, password});
      newUser.save(err=>{
        if(err)
          res.status(500).json({message:{msgBody: "error has occured3", msgError: true }});
        else
          res.status(201).json({message:{msgBody: "Account successfully created", msgError: false}});
      });
    }
  });
});

userRouter.post('/login',passport.authenticate('local',{session:false}),(req,res)=>{
     console.log(req.body);
    if(req.isAuthenticated()){
        const {_id,username,phone,email} = req.user;
        const token = signToken(_id);
        res.cookie('access_token',token,{httpOnly:true, sameSite:true});
        res.status(200).json({isAuthenticated:true,user:{_id,username,phone,email},message:{msgBody: "successfully logged in", msgError: false}});
      }
});

userRouter.post('/update/:id',(req, res)=>{
  const id = req.params.id;
  const { username,phone} = req.body;
  console.log(req.body);
    User.findOneAndUpdate(
      { _id:id },
      {
          username: username,
          phone: phone,
      },function(err, result) {
        if (err) {
          res.send(err);
        } else {
          res.send(result);
        }
      });
}); 

userRouter.post('/resetpassword',(req,res)=>{
  crypto.randomBytes(32,(err,buffer)=>{
      if(err){
          console.log(err)
      }
      const token = buffer.toString("hex")
      User.findOne({email:req.body.email})
      .then(user=>{
          console.log(req.body);
          if(!user){
              // return res.status(422).json({error:"User dont exists with that email"})
              return res.status(422).json({message:{msgBody: "User dont exists with this email", msgError: true}});
          }
          user.resetToken = token
          user.expireToken = Date.now() + 3600000
          user.save().then((result)=>{
              console.log("came.........");
              transporter.sendMail({
                  to:user.email,
                  from:"sangareddyanilkumarreddy@gmail.com",
                  subject:"password reset",
                  html:`
                  <p>You requested for password reset</p>
                  <h5>click in this <a href="http://localhost:3000/reset/${token}">link</a> to reset password</h5>
                  `
              })
              // res.json({message:"check your email"})
              res.status(201).json({message:{msgBody: "check your email", msgError: false}});
          })
      })
  })
})

userRouter.post('/newpassword',(req,res)=>{
  const newPassword = req.body.password
  const sentToken = req.body.token
  User.findOne({resetToken:sentToken,expireToken:{$gt:Date.now()}})
  .then(user=>{
      if(!user){
          //return res.status(422).json({error:"Try again session expired"})
          return res.status(422).json({message:{msgBody: "Try again session expired", msgError: true}});

      }
      bcrypt.hash(newPassword,10).then(hashedpassword=>{
         user.password = newPassword
         user.resetToken = undefined
         user.expireToken = undefined
         user.save().then((saveduser)=>{
             //res.json({message:"password updated success"})
             res.status(201).json({message:{msgBody: "password updated success", msgError: false}});
         })
      })
  }).catch(err=>{
      console.log(err)
  })
})

userRouter.get('/logout',passport.authenticate('jwt',{session:false}),(req,res)=>{
    res.clearCookie('access_token');
    res.json({user:{username:"", phone:""},success:true});
});
userRouter.get('/authenticated',passport.authenticate('jwt',{session:false}),(req,res)=>{
  const {_id,username, email, phone} = req.user;
  res.status(200).json({isAuthenticated:true, user:{_id,username,email,phone}});
});


module.exports = userRouter;
