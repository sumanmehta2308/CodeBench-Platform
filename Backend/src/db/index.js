import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGODB_URI;
    const dbName = process.env.DB_NAME;

    // Deprecated options removed
    const connectionInstance = await mongoose.connect(`${mongoURI}/${dbName}`);

    console.log(
      `\nMongoDB Connected... DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (e) {
    console.log("MONGODB CONNECTION FAILED", e.message);
    process.exit(1);
  }
};

export default connectDB;
