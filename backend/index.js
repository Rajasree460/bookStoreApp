// const express = require('express')
// const dotenv = require('dotenv')

//for esm-> import, export      for commpmjs-> require, module.exports

import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

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


app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})