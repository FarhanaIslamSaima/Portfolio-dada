import  express  from "express";
import { createPost,getPost,getPostbyId } from "../Controller/BlogsController.js";
import { createImage,getImage } from "../Controller/pictureController.js";
import Upload from "../utils/upload.js";
const Router=express.Router()

Router.post('/post/',createPost)
Router.post('/upload/',Upload.single('file'),createImage)
Router.get('/file/:filename',getImage)
Router.get('/get/data',getPost)
Router.get('/get/:id',getPostbyId)

export default Router