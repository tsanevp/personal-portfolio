import mongoose from "mongoose";

const experienceSchema = new mongoose.Schema({
    companyName: { type: String, required: true },
    jobTitle: { type: String, required: true },
    duration: { type: String, required: true },
    description: { type: String, required: true },
    link: { type: String, required: true},
    order: { type: Number, required: true }
},
    { collection: "experience" }
);

const Experiences = mongoose.model('experience', experienceSchema);

export default Experiences;