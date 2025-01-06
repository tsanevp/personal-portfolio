import mongoose from "mongoose";

export default defineNitroPlugin(() => {
    mongoose.connect(useRuntimeConfig().MONGODB_URI);
    console.log("Connected successfully");
})