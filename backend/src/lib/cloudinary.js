import { v2 as cloudinary } from "cloudinary";

import dotenv from "dotenv";
dotenv.config();


// upload images to cloudinary
// and return the URL of the uploaded image
cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default cloudinary;
