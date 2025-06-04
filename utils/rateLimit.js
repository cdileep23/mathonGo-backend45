// rateLimit.ts
import rateLimit from "express-rate-limit";
import RedisStore from "rate-limit-redis";
import redisClient from "./redisClient.js";

export const limiter = rateLimit({
  store: new RedisStore({
    sendCommand: (...args) => redisClient.sendCommand(args),
  }),
  windowMs: 1 * 60 * 1000,
  max: 10,
  message: "Too many requests from this IP, please try again after a minute.",
});
