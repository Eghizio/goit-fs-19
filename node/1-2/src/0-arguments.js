import colors from "colors";

// console.log(process.argv);
// console.log(process.env);

const args = process.argv.slice(2);

// console.log(args);

const getArg = (argName) =>
  args.find((arg) => arg.startsWith(`${argName}=`))?.slice(argName.length + 1);

const color = getArg("color");
const msg = getArg("msg");

// console.log({ color, msg });

const parseArgs = () =>
  args.reduce((allArguments, arg) => {
    const [key, value] = arg.split("=");
    return {
      ...allArguments,
      [key]: value,
    };
  }, {});

const allCommandLineArguments = parseArgs();
console.log(allCommandLineArguments);
// console.log(allCommandLineArguments.color);

const prettyPrint = (color, msg = "Please provide a msg argument") => {
  const coloringFunction = colors[color];

  const textToPrint = coloringFunction ? coloringFunction(msg) : msg;

  console.log(textToPrint);
};

prettyPrint(color, msg);
