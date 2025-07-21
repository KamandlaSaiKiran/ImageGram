import { v2 as cloudinary } from 'cloudinary';
import {CLOUDINARY_CLOUD_NAME} from "./ServerConfig.js"
import {CLOUDINARY_API_KEY} from "./ServerConfig.js"
import {CLOUDINARY_API_SECRET} from "./ServerConfig.js"

cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
});

export default cloudinary;
