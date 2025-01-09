import { Schema, model } from "mongoose";

const taskSchema = new Schema({
  text: { type: String, required: true },
  dateCreated: { type: Date, default: Date.now },
  completed: { type: Boolean, default: false },
});

export const Task = model("task", taskSchema);
