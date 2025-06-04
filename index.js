import dotenv from "dotenv";
dotenv.config({});
import express from "express";




import { chapterRouter } from "./route/chapter.route.js";
import connectDB from "./db.js";
import { loadData } from "./utils/load.js";
import { limiter } from "./utils/rateLimit.js";

const app = express();

app.use(express.json());
app.use(limiter);
app.use("/api/v1/chapters", chapterRouter);
app.get("/", (req,res) => {
  res.send("Hello from MathonGo Backend");
});

const startServer = async () => {
  try {
    await connectDB();
    app.listen(4545, () => {
      console.log("✅ Server Started At 4545");
    });
 
  } catch (error) {
    console.log(error);
  }
};
startServer();
