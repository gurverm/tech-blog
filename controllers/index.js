const router = require("express").Router();
const apiRoutes = require("./api");

router.get("/", (req, res) => {
  res.render("homepage");
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.use("/api", apiRoutes);

module.exports = router;
