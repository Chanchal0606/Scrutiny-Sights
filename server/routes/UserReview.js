const express = require("express");
const router = express.Router();
const { UserReview } = require("../models");

router.get("/", async (req, res) => {
  try {
    const listOfUserReview = await UserReview.findAll();
    res.json(listOfUserReview);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something Went Wrong!" });
  }
});

router.post("/", async (req, res) => {
  const review = req.body;
  try {
    await UserReview.create(review, {
      validate: true,
    });
    res.json(review);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something Went Wrong!" });
  }
});

module.exports = router;
