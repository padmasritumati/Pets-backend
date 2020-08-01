const { Router } = require("express");
const auth = require("../auth/middleware");
const Address = require("../models").address;
const User = require("../models").user;
const Service = require("../models").service;
const Pet=require("../models").pet
const router = new Router();

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  console.log(id);
  if (isNaN(parseInt(id))) {
    return res.status(400).send({ message: "sitter id is not a number" });
  }

  const sitter = await User.findByPk(id, {
    include: [Address, Service,Pet],
  });

  if (sitter === null) {
    return res.status(404).send({ message: "sitter not found" });
  }

  res.status(200).send({ message: "ok", sitter });
});
module.exports = router;
