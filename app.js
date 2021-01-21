//const express = require('express')
import express from "express"
import morgan from "morgan"
import helmet from "helmet"
import cookieParser from "cookie-parser"
import bodyParser from "body-parser"


const app = express()
const handleProfile  = (req,res)=>{res.send("you are on my Profile")}
const handleHome  = (req,res)=>{res.send("hello from home")}
const middleware = (req, res, next)=>{
  res.send("not happening")
}

app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(helmet())
app.use(morgan(
  "dev"
))
app.get("/", middleware, handleHome)
app.get("/profile", handleProfile)

export default app;