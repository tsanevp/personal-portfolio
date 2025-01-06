import mongoose from "mongoose";

const stackSchema = new mongoose.Schema({
    companyName: { type: String, required: true },
    jobTitle: { type: String, required: true },
    duration: { type: String, required: true },
},
    { collection: "stack" }
);

const Stack = mongoose.model('projects', stackSchema);

export default Stack;