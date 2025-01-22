import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    projectName: { type: String, required: true },
    projectDescription: { type: String, required: true },
    projectImageLink: { type: String, required: true },
    projectImageLinks: { type: Array, required: true },
    stack: { type: Array, required: true },
    githubLinks: { type: Object, required: true },
    value: { type: Array, required: true },
    order: { type: Number, required: true }
},
    { collection: "projects" }
);

const Projects = mongoose.model('projects', projectSchema);

export default Projects;