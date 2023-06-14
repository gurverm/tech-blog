const router = require("express").Router();
const apiRoutes = require("./api");
const viewRoutes = require('./view');

router.get("/", (req, res) => {
  res.render("homepage");
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.use("/api", apiRoutes);
router.use(viewRoutes);

module.exports = router;
