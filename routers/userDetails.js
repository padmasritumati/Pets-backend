const { Router } = require("express");
const auth = require("../auth/middleware");
const Address = require("../models").address;
const User = require("../models").user;
const Service = require("../models").service;
const Pet = require("../models").pet;
const router = new Router();

router.get("/service", auth, async (req, res) => {
  try {
    const userLogged = req.user.dataValues;
    const userId = userLogged.id;
    const service = await Service.findByPk(userId);
    res.status(200).send({ message: "ok", service });
  } catch (e) {
    console.log(e);
  }
});

router.get("/pet", auth, async (req, res) => {
  try {
    const userLogged = req.user.dataValues;
    const userId = userLogged.id;
    const pets = await Pet.findAll({ where: { userId: userId } });
    res.status(200).send({ message: "ok", pets });
  } catch (e) {
    console.log(e);
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
  const {
    type,
    name,
    weight,
    breed,
    ageInYears,
    ageInMonths,
    sex,
    image,
  } = req.body;

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

router.delete("/:id", auth, async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const userLogged = req.user.dataValues;
    const userId = userLogged.id;
    const pet = await Pet.findByPk(id);

    if (!pet) {
      res.status(404).send("pet details  not found");
    } else {
      await Pet.destroy({ where: { id: id } });
      await pet.destroy();
      const response = await Pet.findAll({ where: { userId: userId } });
      // console.log("response ",response );
      res.send(response);
    }
  } catch (e) {
    console.log(e);
  }
});

router.patch("/pets/:id", auth, async (req, res) => {
  const userLogged = req.user.dataValues;
  const userId = userLogged.id;
  const { id, name, weight, breed, ageInYears, ageInMonths, sex } = req.body;
  try {
    const updatePet = await Pet.findByPk(id);
    const updatedpet = await updatePet.update({
      name: name,
      weight: weight,
      breed: breed,
      ageInYears: ageInYears,
      ageInMonths: ageInMonths,
      sex: sex,
    });
    const response = await Pet.findAll({ where: { userId: userId } });
    res.send(response);
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
