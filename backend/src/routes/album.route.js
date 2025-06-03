// import { Router } from "express";

// const router = Router();

// router.get("/", (req, res) => {
//   // res.status(200).json({ message: "User route is working!" });
//   res.send("Album route with GET method!");
// });

// export default router;

import { Router } from "express";
import { getAlbumById, getAllAlbums } from "../controller/album.controller.js";

const router = Router();

// nismo stavili protectRoute jer hocemo da pustamo muziku i prikazujemo albume bez autentifikacije
router.get("/", getAllAlbums);
router.get("/:albumId", getAlbumById);

export default router;
