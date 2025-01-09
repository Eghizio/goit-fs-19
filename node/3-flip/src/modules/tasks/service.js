import { Task } from "./repository.js";

export const getAll = () => Task.find({});

export const getById = (id) => Task.findOne({ _id: id });

export const create = (text) => Task.create({ text });

export const updateById = (id, task) =>
  Task.findOneAndUpdate({ _id: id }, task, { new: true });

export const deleteById = (id) => Task.findOneAndDelete({ _id: id });
