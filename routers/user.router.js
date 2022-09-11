const express = require("express");
const router = express.Router();
const User = require("../models/user.model");
const { isMatchPassword } = require("../utils/generatePasswordHash");
const auth = require("../middleware/auth");

// siging up user
router.post("/api/v1/create-user", async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    const token = await user.generateAuthToken();
    console.log("user created");
    res.status(201).send({ user, token, signup: "successfull" });
  } catch (e) {
    res.status(400).send(e);
  }
});

// logging in user

router.post("/api/v1/user-login", async (req, res) => {
  try {
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password
    );
    const token = await user.generateAuthToken();
    res.status(200).send({ user , token });
  } catch (e) {
    res.status(400).send(e.message);
  }
});


// update profile

router.put('/api/v1/update-profile/', auth, async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedOptions = ['name', 'email', 'password'];
    const isValidOptions = updates.every((update) => allowedOptions.includes(update));
    if(!isValidOptions) {
        return res.status(400).send({error: "Invalid updates"});
    }

    try {
        updates.forEach((update) => req.user[update] = req.body[update]);
        await req.user.save();
        res.status(200).send( req.user);
    } catch(e) {
        res.status(400).send(e.message)
    }
})

// get my profile

router.get("/api/v1/my-profile", auth, async (req, res) => {
  try {
    res.send(req.user);
  } catch (e) {
    res.status(500).send();
  }
});

// get all user for admin

router.get("/api/v1/get-all-users", auth, async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).send(users);
  } catch (e) {
    res.status(400).send(e);
  }
});

//  loggin out user

router.post("/api/v1/logout", auth, async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token !== req.token;
    });
    await req.user.save();
    res.status(200).send({ logout: "Logout successfully" });
  } catch (e) {
    res.status(400).send(e);
  }
});

// logging out from all devices to user

router.post("/api/v1/logout-all", auth, async (req, res) => {
  try {
    req.user.tokens = [];
    await req.user.save();
    res.status(200).send({ logout: "Logout from all devices successfully" });
  } catch (e) {
    res.status(400).send(e);
  }
});

// deleteing the user by user

router.delete('/api/v1/delete-profile', auth, async(req, res) => {
    try {
        await req.user.remove();
        res.status(200).send(req.user)
    } catch(e) {
        res.status(500).send(e.message);
    }
});

const userRouter = router;

module.exports = userRouter;
