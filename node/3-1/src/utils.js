import { MongoClient } from "mongodb";

const withDb = async (callback) => {
  const client = new MongoClient(process.env.MONGODB_URI);
  console.log("[utils] Connecting to the MongoDB...");

  await client.connect((error) => {
    if (error) return console.log("Ooopsie", error);
  });
  console.log("[utils] Connected to DB!");

  await callback(client);

  await client.close();
};

export const cleanupUsers = async () => {
  await withDb(async (client) => {
    const users = client.db("test-db").collection("users");

    const dm = await users.deleteMany();
    console.log(`[utils] ${dm.deletedCount} users deleted.`);
  });
};

const usersDocuments = [
  {
    name: "Adam",
    age: 42,
    books: ["Some", "Books", "Here"],
  },
  {
    name: "Beth",
    age: 456,
    books: ["First", "Second"],
  },
  {
    name: "Cecil",
    age: 123,
    books: [],
  },
];

export const setupUsers = async () => {
  await withDb(async (client) => {
    const users = client.db("test-db").collection("users");

    const im = await users.insertMany(usersDocuments);
    console.log(`[utils] ${im.insertedCount} users inserted.`);
  });
};
