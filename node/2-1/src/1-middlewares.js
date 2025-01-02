import express from "express";
import colors from "colors";

const app = express();

const logger = (req, res, next) => {
  const { method, originalUrl } = req;

  const date = new Date().toLocaleString();
  console.log(colors.yellow(`[${date}] [${method}] - ${originalUrl}`));

  next();
};

let visits = 0; /* Global variable */
const simpleVisitsCounter = (req, res, next) => {
  visits += 1;

  console.log(colors.magenta(`Visits: (${visits})`));

  next();
};

const visitsUrlCounter = () => {
  const visits = {};

  return (req, res, next) => {
    const { originalUrl } = req;

    visits[originalUrl] = visits[originalUrl] ? ++visits[originalUrl] : 1;
    console.log(
      colors.blue(`URL Visits: (${visits[originalUrl]}) - ${originalUrl}`)
    );

    next();
  };
};

// app.use(logger);
// app.use(simpleVisitsCounter);

// app.use(visitsCounter);
// app.use(visitsUrlCounter());

// app.use(visitsUrlCounter());
// app.use(logger);

app.use(logger, visitsUrlCounter());

app.get("/", simpleVisitsCounter, (request, response) => {
  return response.send("Hello there!");
});

app.get("/hi", simpleVisitsCounter, (request, response) => {
  return response.send("<h1 style='color:dodgerblue'>Hi!</h1>");
});

app.get("/visits", (request, response) => {
  return response.json({ visits });
});

app.use((req, res) => {
  const notFoundMessage = "Ooopsie! You got lost? There is no such path!";
  return res
    .status(404)
    .send(`<h1 style='color:crimson'>${notFoundMessage}</h1>`);
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(colors.cyan(`[server] Server running on port ${PORT}`));
});
