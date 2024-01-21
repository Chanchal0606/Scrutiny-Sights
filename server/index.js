const express = require("express");
const app = express();
const cors = require('cors')

const db = require("./models");

app.use(express.json());
app.use(cors());

// Routers
const userReviewRouter = require('./routes/UserReview');
app.use("/search", userReviewRouter);

db.sequelize.sync().then(() => {
  app.listen(5200, () => {
    console.log("Server Running on port 5200");
  });
});
