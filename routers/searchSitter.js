const { Router } = require("express");
const auth = require("../auth/middleware");
const User = require("../models").user;
const Service = require("../models").service;
const router = new Router();
const { Op } = require("sequelize");

function calculateDistance(latA, lngA, latB, lngB) {
  // http://www.movable-type.co.uk/scripts/latlong.html

  const lat1 = latA;
  const lon1 = lngA;

  const lat2 = latB;
  const lon2 = lngB;

  const R = 6371e3; // earth radius in meters
  const φ1 = lat1 * (Math.PI / 180);
  const φ2 = lat2 * (Math.PI / 180);
  const Δφ = (lat2 - lat1) * (Math.PI / 180);
  const Δλ = (lon2 - lon1) * (Math.PI / 180);

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) * (Math.sin(Δλ / 2) * Math.sin(Δλ / 2));

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const distance = Math.abs((R * c) / 1000);
  return distance; // in km
}

router.get("/:type/:service/:size/:lat/:lng", async (req, res) => {
  console.log("entered===");
  const { type, service, size, lat, lng } = req.params;

  parseFloat(lat);
  parseFloat(lng);
  console.log("from server", type, service, size, lat, lng);

  if (!service || !lat || !lng || !type) {
    return res.status(400).send({ message: "Please fill out all the fields" });
  }

  console.log("Before switch1", service);
  let serviceType;
  let typeSelected;
  let sizeselected;

  switch (service) {
    case "Boarding":
      serviceType = "boarding";
      break;
    case "House Sitting":
      serviceType = "houseSitting";
      break;
    case "Drop-In Visits":
      serviceType = "dropInVisits";
      break;
    case "Doggy Day Care":
      serviceType = "doggyDayCare";
      break;
    case "Dog Walking":
      serviceType = "dogWalking";
      break;
    default: {
      console.log("default");
    }
  }
  console.log("Before switch2");

  switch (size) {
    case "Small(0-7)kg":
      sizeselected = "small";
      break;
    case "Medium(7-18)kg":
      sizeselected = "medium";
      break;
    case "Large(18-45)kg":
      sizeselected = "large";
      break;
    case "Gaint(45+)kg":
      sizeselected = "gaint";
      break;
    default: {
      console.log("default");
    }
  }
  if (type === "Cat") {
    typeSelected = "cat";
    where = { [typeSelected]: true, [serviceType]: true };
  } else {
    where = { [serviceType]: true, [sizeselected]: true };
  }
  console.log("where ", where);
  try {
    const services = await Service.findAll({
      include: [User],
      where: where,
    });
    console.log("Service resukt", services);
    const filteredList = services.filter((userService) => {
      const user = userService.dataValues.user.dataValues;
      const latUser = parseFloat(user.latitude);
      const longUser = parseFloat(user.longitude);
      const distance = calculateDistance(
        latUser,
        longUser,
        parseFloat(lat),
        parseFloat(lng)
      );
      console.log("distance", distance);
      if (distance < 5) {
        return userService;
      } else {
        return res.status(404).send({ message: "Not found" });
      }
    });
    res.status(200).send({ message: "ok", filteredList });
  } catch (e) {
    console.log(e);

  }
});
module.exports = router;
