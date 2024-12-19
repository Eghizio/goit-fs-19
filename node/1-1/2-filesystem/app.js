import fs from "node:fs";
import path from "node:path";
import fsPromises from "node:fs/promises";

const FILE_NAME = "io.json";
// const FILE_NAME = "secret_file";

const savedData = { secret: "abc" };

const serializeData = (data) => JSON.stringify(data) + "\n";

/* Sync API */
fs.writeFileSync(FILE_NAME, serializeData(savedData), { flag: "a" });

const retrievedData = fs.readFileSync(FILE_NAME, { encoding: "utf-8" });

console.log(retrievedData); // Parse to JSON

/* Async API */
await fsPromises.writeFile(FILE_NAME, serializeData(savedData), { flag: "a" });

const contents = await fsPromises.readFile(FILE_NAME, { encoding: "utf-8" });

console.log(contents);

/* Scan folder */
const printDirectory = async (directoryName) => {
  const files = await fsPromises.readdir(directoryName);

  const stats = await Promise.all(
    files.map(async (file) => {
      const filePath = path.join(directoryName, file);

      const { size, mtime } = await fsPromises.stat(filePath);

      return {
        name: file,
        size,
        date: mtime,
      };
    })
  );

  console.table(stats);
};

printDirectory(".");
// printDirectory("0-node-npm");
