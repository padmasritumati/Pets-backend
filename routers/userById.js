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
    include: [Address, Service],
  });
  if (user === null) {
    return res.status(404).send({ message: "user not found" });
  }
  res.status(200).send({ message: "ok", user });
});

router.post("/contact", auth, async (req, res, next) => {
  try {
    const userLogged = req.user.dataValues;
    const {
      mailToId,
      userId,
      message,
      time,
      date,
      enddate,
      selectedservice,
      pet,
    } = req.body;
    const toSend = await User.findByPk(mailToId);
    console.log("bef", process.env.EMAIL, process.env.PASSWORD_EMAIL);
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD_EMAIL,
      },
    });
    console.log("after");

    var mailOptions = {
      from: `${userLogged.full_name} from PETS <${process.env.EMAIL}>`,
      to: "pets2020pet@gmail.com",
      subject: "You have received a new request!",
      html: `<h2>Hello <strong>${toSend.dataValues.full_name}<strong>!</h2>
      <h3><strong>${
        userLogged.full_name
      }</strong> has required your services.</h3>
      <p><u>Requested Service</u>: ${selectedservice} </p>
      <p><u>Date</u>:${date}</p>
      <p>${selectedservice === "Boarding" ? `End Date:${enddate}` : ""}</p>
      <p><u>Time</u>:${time}</p>
      <p><u>Message</u>:${message}</p>
      <p><u>Pet</u>:${pet}</p>
     
      
      `
    };
    console.log(mailOptions);
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log("error", error);
        return res.status(400).send({ message: "Something went wrong, sorry" });
      } else {
        console.log("Email sent: " + info.response);
        res.status(201).json(info.response);
      }
    });
  } catch (e) {
    console.log("Exception", e);
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

module.exports = router;
