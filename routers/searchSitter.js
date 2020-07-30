const { Router } = require("express");
const auth = require("../auth/middleware");
const Address = require("../models").address;
const User = require("../models").user;
const Service = require("../models").service;
const router = new Router();


router.get("/", async (req, res) => {
  const limit = req.query.limit || 10;
  const offset = req.query.offset || 0;
  const users = await User.findAndCountAll({
    limit,
    offset,
    include: [Address,Service],
    
  });
  res.status(200).send({ message: "ok", users });
});
module.exports = router ;