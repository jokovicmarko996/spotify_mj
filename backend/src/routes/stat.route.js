// import { Router } from "express";

// const router = Router();

// router.get("/", (req, res) => {
//   // res.status(200).json({ message: "User route is working!" });
//   res.send("Stat route with GET method!");
// });

// export default router;


import { Router } from "express";
import { protectRoute, requireAdmin } from "../middleware/auth.middleware.js";
import { getStats } from "../controller/stat.controller.js";

const router = Router();

router.get("/", protectRoute, requireAdmin, getStats);

export default router;
