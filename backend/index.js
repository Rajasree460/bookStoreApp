// const express = require('express')
// const dotenv = require('dotenv')

//for esm-> import, export      for commpmjs-> require, module.exports

import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";

// const FRONTEND_URL = process.env.FRONTEND_URL;

// app.use(cors({ origin: FRONTEND_URL, credentials: true }));

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
import contactRoute from "./route/contact.route.js";

const app = express();

app.use(cors());  //middleware
app.use(express.json());  //will parse data in json format

dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// connect to mongoDB
try {
    mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("Connected to mongoDB");
} catch (error) {
    console.log("Error: ", error);
}

// defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute);
app.use("/contact", contactRoute);

//deployment
if(process.env.NODE_ENV === 'production'){
    const dirPath=path.resolve();
    app.use(express.static("frontend/dist"))
    app.get("*",(req,res)=>{
       res.sendFile(path.resolve(dirPath,"frontend","dist","index.html"))
    })
    }


  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

//module.exports = app; //for vercelits my index