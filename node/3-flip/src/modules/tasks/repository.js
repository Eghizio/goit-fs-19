import { Schema, model } from "mongoose";

const taskSchema = new Schema({
  text: { type: String, required: true },
  dateCreated: { type: Date, default: Date.now },
  completed: { type: Boolean, default: false },
});

export const Task = model("task", taskSchema);

/* Abstracting Repository layer */

/* interface TasksRepository { create } */
const MongoDbTasksRepository = {
  create: (text) => {
    return Task.create({ text });

    // const task = new Task({ text });
    // return Task.save();
  },
  // other methods...
};

const db = { query: () => {} };
/* interface TasksRepository { create } */
const PostgreSqlTasksRepository = {
  create: (text) => {
    // PostgreSQL specific code here
    return db.query("INSERT INTO tasks (text) VALUES ($1) RETURNING id", [
      text,
    ]);
  },
  // other methods...
};

export const TasksRepository = MongoDbTasksRepository;
// export const TasksRepository = PostgreSqlTasksRepository;
