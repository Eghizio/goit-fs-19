// api.get("/tasks", TasksController.getAll);
// api.get("/tasks/:id", TasksController.getById);
// api.post("/tasks", TasksController.create);
// api.patch("/tasks/:id", TasksController.updateById);
// api.delete("/tasks/:id", TasksController.deleteById);

const headers = { "Content-Type": "application/json" };

const API_URL = `http://localhost:3000/api`;

const createHttpClient = (apiUrl) => ({
  async request(url, method, body) {
    return fetch(`${apiUrl}${url}`, {
      headers,
      method,
      body: JSON.stringify(body),
    })
      .then((response) =>
        response.headers.get("Content-Type")?.includes("application/json")
          ? response.json()
          : response.text()
      )
      .catch(console.error);
  },
  async get(endpoint) {
    return this.request(endpoint);
  },
  async post(endpoint, body) {
    return this.request(endpoint, "POST", body);
  },
  async patch(endpoint, body) {
    return this.request(endpoint, "PATCH", body);
  },
  async delete(endpoint) {
    return this.request(endpoint, "DELETE");
  },
});

const Client = createHttpClient(API_URL);

export const TasksApi = {
  getAllTasks: async () => Client.get(`/tasks`),
  getTaskById: async (id) => Client.get(`/tasks/${id}`),
  addTask: async (text) => Client.post(`/tasks`, { text }),
  updateTask: async (taskId, task) => Client.patch(`/tasks/${taskId}`, task),
  deleteTask: async (taskId) => Client.delete(`/tasks/${taskId}`),
};

/* Old stuff */
const _OldClient = {
  get: async (endpoint) => {
    const url = `${API_URL}${endpoint}`;

    return request(url);

    // return fetch(url, { headers })
    //   .then((response) => response.json())
    //   .catch(console.error);
  },
  post: async (endpoint, body) => {
    const url = `${API_URL}${endpoint}`;

    return request(url, "POST", body);

    // return fetch(url, { method: "POST", headers, body: JSON.stringify(body) })
    //   .then((response) => response.json())
    //   .catch(console.error);
  },
  patch: async (endpoint, body) => {
    const url = `${API_URL}${endpoint}`;

    return request(url, "PATCH", body);

    // return fetch(url, { method: "PATCH", headers, body: JSON.stringify(body) })
    //   .then((response) => response.json())
    //   .catch(console.error);
  },
  delete: async (endpoint) => {
    const url = `${API_URL}${endpoint}`;

    return request(url, "DELETE");

    // return fetch(url, { method: "DELETE", headers })
    //   .then((response) => response.json())
    //   .catch(console.error);
  },
};
