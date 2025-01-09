import { Schema, model } from "mongoose";

const simpleStudentsSchema = new Schema({
  name: String,
  age: Number,
  grades: [Number],
  isAdmin: Boolean,
});

export const SimpleStudent = model("simplestudent", simpleStudentsSchema);
