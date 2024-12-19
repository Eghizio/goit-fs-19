import chalk from "chalk";
import colors from "colors";

const msg = "Hello World!";

const colorFns = [chalk.red, chalk.blue, chalk.green, chalk.cyan, chalk.yellow];

const coloured = msg
  .split("")
  .map((c, i) => colorFns[i % colorFns.length](c))
  .join("");

// console.log(coloured);

// console.log(chalk.bgWhiteBright(coloured));

// console.log(chalk.bgBlueBright(coloured));

// console.log(chalk.bgGreenBright(coloured));

// console.log(colors.america("Fuck yeah!"));
