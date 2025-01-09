import mongoose from "mongoose";
import { SimpleStudent } from "./SimpleStudent.js";
import { Student } from "./Student.js";

console.log("Connecting to MongoDB...");
await mongoose.connect(process.env.MONGODB_URI);
console.log("Connected to MongoDB!");

process.on("SIGINT", async () => {
  await mongoose.disconnect();
  console.log("Database disconnected!");
});

/* SimpleStudent */
const saveSimpleStudent = async () => {
  const gregory = new SimpleStudent({
    name: "Grzegorz",
    age: 100,
    grades: [4, 2, 5, 6],
    isAdmin: true,
  });

  console.log("Saving gregory!");

  setTimeout(() => {
    gregory.save().then(console.log);
    console.log("Gregory saved!");
  }, 15_000);
};

saveSimpleStudent();
// saveSimpleStudent();
// saveSimpleStudent();
// saveSimpleStudent();
// saveSimpleStudent();
// saveSimpleStudent();

await SimpleStudent.findOne().then(console.log);

SimpleStudent.szukajGrzegorzy = async () =>
  SimpleStudent.find({ name: "Grzegorz" });

SimpleStudent.szukajGrzegorzy().then((grzegorze) => {
  console.log(grzegorze, grzegorze.length);
});

/* Student */

// await Student.deleteMany({}).then(console.log);
await Student.clearAll({}).then(console.log);

await Student.create({ name: "Adam", age: 21 }).then(console.log);

await Student.insertMany([
  { name: "Beth", age: 24 },
  { name: "Cecil", age: 42 },
  { name: "Kuba", age: 25 },
]).then(console.log);

await Student.find().then(console.log);

await Student.findOne({ name: "Adam" }).then(console.log);
await Student.findOne({ name: "Dupa" }).then(console.log);

await Student.findOneAndDelete({ name: "Adam" }).then(console.log);

await Student.findOneAndUpdate(
  { name: "Cecil" },
  { age: 44 },
  { new: true }
).then(console.log);

/* Force application exit */
process.exit(0);
