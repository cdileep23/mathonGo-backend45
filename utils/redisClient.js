import { createClient } from "redis";
import dotenv from 'dotenv'
dotenv.config()
 console.log(process.env.REDIS_Url);
const redisClient = createClient({
  url: process.env.REDIS_Url,
});

redisClient.on("error", (err) => console.error("Redis Client Error", err));

(async () => {
  try {
    await redisClient.connect();
    console.log("🔌 Redis connected");
  } catch (err) {
    console.error("❌ Redis connection failed:", err);
  }
})();

export default redisClient;
