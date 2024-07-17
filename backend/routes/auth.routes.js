import express from "express";
// import { login, logout, signup } from "../controllers/auth.controller.js";

const router = express.Router();

router.get("/signup",
  // signup 
  (req, res) => {
    res.send("signup");
    }
);

// router.post("/login", login);

// router.post("/logout", logout);

export default router;
