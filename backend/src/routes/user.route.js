// import { Router } from "express";

// const router = Router();

// router.get("/", (req, res) => {
//   // res.status(200).json({ message: "User route is working!" });
//   res.send("User route with GET method!");
// });

// export default router;

import { Router } from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { getAllUsers, getMessages } from "../controller/user.controller.js";
const router = Router();

router.get("/", protectRoute, getAllUsers);
router.get("/messages/:userId", protectRoute, getMessages);

export default router;
