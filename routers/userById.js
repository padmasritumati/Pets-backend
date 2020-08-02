const { Router } = require("express");
const auth = require("../auth/middleware");
const Address = require("../models").address;
const User = require("../models").user;
const Service = require("../models").service;
const Pet = require("../models").pet;
const nodemailer = require("nodemailer");
const router = new Router();

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);
  if (isNaN(parseInt(id))) {
    return res.status(400).send({ message: "user id is not a number" });
  }
  const user = await User.findByPk(id, {
    include: [Address,Service]
    
  });
  if (user === null) {
    return res.status(404).send({ message: "user not found" });
  }
  res.status(200).send({ message: "ok", user });
});


router.post("/contact",  async (req, res, next) => {
try{
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: 'pets2020pet@gmail.com',
        pass: '26081590',
      },
    });

    var mailOptions = {
      from:"pets2020pet@gmail.com",
      to: "pets2020pet@gmail.com",
      subject: "You have received a new request!🐶🐱",
      text:"from the pets"
      
    };
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        return res.status(400).send({ message: "Something went wrong, sorry" });
      } else {
        console.log("Email sent: " + info.response);
        res.status(201).json(info.response);
      }
    });
  } catch (e) {
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

module.exports = router;