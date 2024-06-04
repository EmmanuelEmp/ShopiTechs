import dotenv from "dotenv";
dotenv.config();
import cloudinaryModule from "cloudinary";


export const cloudinary = cloudinaryModule.v2

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});