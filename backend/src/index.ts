import mongoose from "mongoose";
import { fetchAndSaveCryptoData } from "./services";

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/Cryptos";

mongoose
  .connect(MONGO_URI, {})
  .then(() => {
    console.log("Connected to MongoDB");

    const fetchInterval = setInterval(async () => {
      try {
        await fetchAndSaveCryptoData();
      } catch (error) {
        console.error("Error fetching and saving crypto data:", error);
      }
    }, 2500);

    const gracefulShutdown = (): void => {
      clearInterval(fetchInterval);
      mongoose.connection.close().then(() => {
        console.log("Disconnected from MongoDB");
        process.exit(0);
      });
    };

    process.on("SIGINT", gracefulShutdown);
    process.on("SIGTERM", gracefulShutdown);
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });
