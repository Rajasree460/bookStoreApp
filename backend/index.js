import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
// import path from "path";

// Load environment variables first
dotenv.config();

const app = express();

// Middleware
//const FRONTEND_URL = process.env.FRONTEND_URL || "*";  // Allow all origins if FRONTEND_URL is undefined
app.use(cors({ origin: FRONTEND_URL, credentials: true }));
app.use(express.json()); // Parse incoming JSON data

// Routes
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
import contactRoute from "./route/contact.route.js";

app.use("/book", bookRoute);
app.use("/user", userRoute);
app.use("/contact", contactRoute);

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// Connect to MongoDB
mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.log("Error connecting to MongoDB:", error));

// Start Server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

// Use ESM syntax instead of module.exports
export default app;
