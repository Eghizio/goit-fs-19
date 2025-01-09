// api.get("/tasks", TasksController.getAll);
// api.get("/tasks/:id", TasksController.getById);
// api.post("/tasks", TasksController.create);
// api.patch("/tasks/:id", TasksController.updateById);
// api.delete("/tasks/:id", TasksController.deleteById);

const headers = { "Content-Type": "application/json" };

const API_URL = `http://localhost:3000/api`;

const Client = {
  get: async (endpoint) => {
    const url = `${API_URL}${endpoint}`;
    return fetch(url, { headers })
      .then((response) => response.json())
      .catch(console.error);
  },
  post: async (endpoint, body) => {
    const url = `${API_URL}${endpoint}`;
    return fetch(url, { method: "POST", headers, body: JSON.stringify(body) })
      .then((response) => response.json())
      .catch(console.error);
  },
  patch: async (endpoint, body) => {
    const url = `${API_URL}${endpoint}`;
    return fetch(url, { method: "PATCH", headers, body: JSON.stringify(body) })
      .then((response) => response.json())
      .catch(console.error);
  },
  delete: async (endpoint) => {
    const url = `${API_URL}${endpoint}`;
    return fetch(url, { method: "DELETE", headers })
      .then((response) => response.json())
      .catch(console.error);
  },
};

export const TasksApi = {
  getAllTasks: async () => Client.get(`/tasks`),
  getTaskById: async (id) => Client.get(`/tasks/${id}`),
  addTask: async (text) => Client.post(`/tasks`, { text }),
  updateTask: async (taskId, task) => Client.patch(`/tasks/${taskId}`, task),
  deleteTask: async (taskId) => Client.delete(`/tasks/${taskId}`),
};
