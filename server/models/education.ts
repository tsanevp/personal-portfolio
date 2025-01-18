import mongoose from "mongoose";

const educationSchema = new mongoose.Schema({
    schoolName: { type: String, required: true },
    degree: { type: String, required: true },
    gpa: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true},
},
    { collection: "education" }
);

const Education = mongoose.model('education', educationSchema);

export default Education;