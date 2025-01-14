import mongoose from "mongoose";

const stackSchema = new mongoose.Schema({
    frontend: { type: Array, required: true },
    backend: { type: Array, required: true },
},
    { collection: "stack" }
);

const Stack = mongoose.model('stack', stackSchema);

export default Stack;