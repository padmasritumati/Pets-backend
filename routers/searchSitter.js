const { Router } = require("express");
const auth = require("../auth/middleware");
const Address = require("../models").address;
const User = require("../models").user;
const Service = require("../models").service;
const router = new Router();

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

router.get("/", async (req, res) => {
  const { type,service,size,lat,lng } = req.query;
  console.log(type,service,size,lat,lng)
  try{
  const limit = req.query.limit || 10;
  const offset = req.query.offset || 0;
  const users = await User.findAndCountAll({
    limit,
    offset,
    include: [Address,Service],
    where: { petSitter: true },
  });
  res.status(200).send({ message: "ok", users });
}catch(e){
   console.log(e)
}
});
module.exports = router;
