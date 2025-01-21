import mongoose from "mongoose";

const stackIconSchema = new mongoose.Schema({
    name: { type: String, required: true },
    label: { type: String, required: true },
    description: { type: String },
    order: { type: Number }
  });

const stackSchema = new mongoose.Schema({
    frontend: { type: [stackIconSchema], required: true },
    backend: { type: [stackIconSchema], required: true },
    cloudAndDevops: { type: [stackIconSchema], required: true },
    databases: { type: [stackIconSchema], required: true },
},
    { collection: "stack" }
);

const Stack = mongoose.model('stack', stackSchema);

export default Stack;