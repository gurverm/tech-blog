const userRouter = require("express").Router();
const User = require("../../models/User.js");

// Get all users
userRouter.get("/", async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (err) {
    console.error(err);
    res.User(500).json({ message: "Server error" });
  }
});

// Get a single user by id
userRouter.get("/:id", async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// Create a new user
userRouter.post("/", async (req, res) => {
  try {
    const [newUser, exists] = await User.findOrCreate({
      where: { username: req.body.username },
      defaults: {
        password: req.body.password,
        email: req.body.email,
      },
    });
    if (!exists) {
      res.status(409).json({ message: "This user already exists." });
      return;
    }
    res.json(newUser);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: "Server error. User could not be created." });
  }
});

// Delete a user
userRouter.delete("/:id", async (req, res) => {
  try {
    await User.destroy({ where: { id: req.params.id } });
    req.session.destroy();
    res.status(204).end();
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: "Server error. User could not be deleted." });
  }
});

module.exports = userRouter;
