/* Mimic the project file structure: /src /test */

const request = require("supertest"); /* https://www.npmjs.com/package/supertest */
const { createServer } = require("../src/server.js");

const app = createServer();

/* Can be used combined with Jest */
request(app)
  .get("/user")
  .expect("Content-Type", /json/)
  .expect("Content-Length", "15")
  .expect(200)
  .end((error, res) => {
    if (error) throw error;
  });
