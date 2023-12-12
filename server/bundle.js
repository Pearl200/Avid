// import the express module
const express = require("express");

// import the UserController
const UserController = require("../controllers/UserController");

// initialize router
const router = express.Router();

// user routes
router.get("/users", UserController.getAllUsers);
router.get("/users/:id", UserController.getUserById);
router.post("/users", UserController.createUser);
router.put("/users/:id", UserController.updateUser);
router.delete("/users/:id", UserController.deleteUser);

// export the router
module.exports = router;
