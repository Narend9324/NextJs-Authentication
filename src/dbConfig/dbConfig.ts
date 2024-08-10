import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URI!);
    console.log("mongosse", process.env.MONGO_URI);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("MongoDB connected successfully");
    });

    connection.on("error", (err) => {
      console.log(
        "MongoDB connection error.please make sure MongoDB is running" + err
      );
      process.exit();
    });
  } catch (error) {
    console.log("something goes wrong");
    console.log(error);
  }
}
