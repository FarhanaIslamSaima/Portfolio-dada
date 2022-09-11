import express from 'express'
import { addUser,login } from '../controller/Auth_Controller.js'
import { updateUser,deleteUser,getAll} from '../controller/Users.js'
import { Verify } from '../controller/JwtVerify.js'
import { createMovie, getAny } from '../controller/Movies.js'
import { addlist, DeleteList,getList } from '../controller/Lists.js'
const Router=express.Router()
Router.post("/auth",addUser)
Router.post("/login",login)
Router.put("/user/:id",Verify,updateUser)
Router.put("/delUser/:id",Verify,deleteUser)
Router.post("/movies/",Verify,createMovie)
Router.get("/movies/get",getAny)

Router.get("/find/all",Verify,getAll)
Router.post("/list/",Verify,addlist)
Router.post("/list/:id",Verify,DeleteList)
Router.get("/list/get",getList)

export default Router