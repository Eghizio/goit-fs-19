const createTaskItem = (task) => {
  const taskItem = document.createElement("li");

  const pre = document.createElement("pre");
  pre.textContent = JSON.stringify(task, null, 2);

  taskItem.append(pre);

  return taskItem;
};

export const renderTasks = (tasks) => {
  const taskList = document.querySelector("ol#read-all");

  const items = tasks.map(createTaskItem);

  taskList.replaceChildren(...items);
};
