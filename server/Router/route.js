import  express  from "express";
import { createPost } from "../Controller/BlogsController.js";
import { createImage,getImage } from "../Controller/pictureController.js";
import Upload from "../utils/upload.js";
const Router=express.Router()

Router.post('/post/',createPost)
Router.post('/upload/',Upload.single('file'),createImage)
Router.get('/file/:filename',getImage)

export default Router