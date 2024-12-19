const { add, subtract, multiply, divide } = require("./math.js");
const Logger = require("./Logger.js");

Logger.log(add(40, 2));

Logger.error(subtract(44, 2));

Logger.warn(multiply(2, 1));

Logger.info(divide(3, 7));
