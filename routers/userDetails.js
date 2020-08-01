const { Router } = require("express");
const auth = require("../auth/middleware");
const Address = require("../models").address;
const User = require("../models").user;
const Service = require("../models").service;
const Pet = require("../models").pet;
const router = new Router();

router.get("/address", auth, async (req, res) => {
  const userLogged = req.user.dataValues;
  const userId=userLogged.id
  const address = await Address.findByPk(userId);
  res.status(200).send({ message: "ok", address });
});

router.post("/address", auth, async (req, res) => {
  const userLogged = req.user.dataValues;
  
  const { house_number, street, city, postcode, country } = req.body;

  if (!house_number || !street || !city || !postcode || !country) {
    return res.status(400).send("Please fill out all the fields");
  }

  try {
    const userAddress = await Address.create({
      house_number,
      street,
      city,
      postcode,
      country,
      userId: userLogged.id,
    });

    res.status(201).json(userAddress);
  } catch (error) {
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

router.post("/phone", auth, async (req, res) => {
  const userLogged = req.user.dataValues;
  console.log("post", req.body);
  const { phone, image } = req.body;

  if (!phone || !image) {
    return res.status(400).send("Please fill out all the fields");
  }

  try {
    const user = await User.update(
      {
        phone: phone,
        image: image,
      },
      { where: { id: userLogged.id } }
    );

    res.status(201).json(user);
  } catch (error) {
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

router.post("/services", auth, async (req, res) => {
  const userLogged = req.user.dataValues;
  console.log("user", userLogged);
  console.log("services", req.body);

  const {
    boarding,
    houseSitting,
    dropInVisits,
    doggyDayCare,
    dogWalking,
    boardingRate,
    houseSittingRate,
    dropInVisitsRate,
    doggyDayCareRate,
    dogWalkingRate,
    small,
    medium,
    large,
    gaint,
    cat,
  } = req.body;

  try {
    const userServices = await Service.create({
      boarding,
      houseSitting,
      dropInVisits,
      doggyDayCare,
      dogWalking,
      boardingRate,
      houseSittingRate,
      dropInVisitsRate,
      doggyDayCareRate,
      dogWalkingRate,
      small,
      medium,
      large,
      gaint,
      cat,
      userId: userLogged.id,
    });

    res.status(201).json(userServices);
  } catch (error) {
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

router.post("/pets", auth, async (req, res) => {
  const userLogged = req.user.dataValues;
  const { type, name, weight, breed, ageInYears, ageInMonths, sex ,image} = req.body;

  if (!type || !name || !breed || !sex) {
    return res.status(400).send("Please fill out all the fields");
  }

  try {
    const pet = await Pet.create({
      type,
      name,
      weight,
      breed,
      ageInYears,
      ageInMonths,
      sex,
      image,
      userId: userLogged.id,
    });

    res.status(201).json(pet);
  } catch (error) {
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

module.exports = router;
