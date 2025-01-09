import { TasksApi } from "./js/api.js";
import { renderTasks } from "./js/render.js";

const refreshTasksList = () =>
  TasksApi.getAllTasks().then((data) => {
    renderTasks(data.tasks);
  });

refreshTasksList();

document
  .querySelector("button#refresh")
  .addEventListener("click", refreshTasksList);

const onSubmit = async (selector, callback) => {
  document.querySelector(selector).addEventListener("submit", async (event) => {
    event.preventDefault();

    await callback(event).then(printData);

    event.target.reset();

    await refreshTasksList();
  });
};

const printData = (data) => alert(JSON.stringify(data, null, 2));

onSubmit("form#create", async (event) => {
  const text = event.target.elements["text"].value;

  return TasksApi.addTask(text);
});

onSubmit("form#read", async (event) => {
  const id = event.target.elements["id"].value;

  return TasksApi.getTaskById(id);
});

onSubmit("form#update", async (event) => {
  const id = event.target.elements["id"].value;
  const text = event.target.elements["text"].value;
  const completed = event.target.elements["completed"].checked;

  const task = { completed };

  if (text) task.text = text;

  return TasksApi.updateTask(id, task);
});

onSubmit("form#delete", async (event) => {
  const id = event.target.elements["id"].value;

  return TasksApi.deleteTask(id);
});
