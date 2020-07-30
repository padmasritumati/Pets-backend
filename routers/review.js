const express = require("express");
const { Router } = express;
const router = new Router();
const Review = require("../models").review;
const User = require("../models").user;
const authMiddleware = require("../auth/middleware");



router.post("/", authMiddleware, async (req, res) => {
  const userLogged = req.user.dataValues;
  const { rating, review_description } = req.body;
  console.log("rating",req.body)

  if (!rating || !review_description) {
    return res.status(400).send("Please fill out all the fields");
  } 
   else if (rating < 1 || rating > 5 ) {
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }

  try {
    const newReview = await Review.create({
    rating,
    review_description,
    userId: userLogged.id,
    });

    const reviews = await Review.findAll({
      include: [User],
    });
    res.status(201).json(reviews);
  } catch (error) {
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

router.get("/", async (req, res, next) => {
  try {
    const reviews = await Review.findAll({
      include: [User],
    });
    res.status(201).json(reviews);
  } catch (e) {
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

module.exports = router;