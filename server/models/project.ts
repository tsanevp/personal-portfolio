import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    projectName: { type: String, required: true },
    projectDescription: { type: String, required: true },
    projectLink: { type: String, required: true },
    stack: { type: Array, required: true },
},
    { collection: "projects" }
);

const Projects = mongoose.model('projects', projectSchema);

export default Projects;