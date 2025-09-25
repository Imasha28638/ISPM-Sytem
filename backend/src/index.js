import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const mongoUrl = process.env.MONGO_URL;
const PORT = process.env.PORT;
const corsOptions = {
  origin: ["http://localhost:3000", "http://localhost:3001"], // Allow your frontend URLs
  credentials: true, // Allow cookies and authentication headers
  optionsSuccessStatus: 200,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
};

mongoose.connect(mongoUrl, {});
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const connection = mongoose.connection;

app.listen(PORT, () => {
  console.log("Server is running on port:" + PORT);
});

connection.once("open", () => {
  console.log("Connected to MongoDB");
});