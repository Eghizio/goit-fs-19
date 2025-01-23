const { createServer } = require("./server.js");

const config = {
  port: 3000,
};

const main = async (config) => {
  const app = createServer();

  return app.listen(config.port, () =>
    console.log(`Listening on port ${config.port}`)
  );
};

main(config).catch(console.error);
