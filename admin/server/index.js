import express from 'express'
import connection from './database/db.js'
import Cors from 'cors'
import bodyParser from 'body-parser'
import Router from './router/Router.js'
import dotenv from 'dotenv'
dotenv.config()
const app=express()
app.use(Cors())
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())
app.use('/',Router)


app.listen(8000,()=>{
    console.log("Server started successfully")
})
connection()