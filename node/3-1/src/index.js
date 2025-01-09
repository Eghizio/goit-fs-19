import { MongoClient, ObjectId } from "mongodb";
import { setupUsers, cleanupUsers } from "./utils.js";
import { MongoCollection } from "./MongoCollection.js";

/* https://cloud.mongodb.com/ */

const { MONGODB_URI } = process.env;

const client = new MongoClient(MONGODB_URI);
console.log("Connecting to the MongoDB...");

/* Top Level Await for modules */
await client.connect(async (error) => {
  if (error) return console.log("Ooopsie", error);
});
console.log("Connected to DB!");

/* Operating on collections */
const displayCollections = async () => {
  const collections = await client.db("test-db").collections();
  console.log(collections.map((col) => col.collectionName));
};
// await displayCollections();

const users = client.db("test-db").collection("users");

const countUsersDocuments = async () => {
  const usersCount = await users.countDocuments();
  console.log({ usersCount });
};
// await countUsersDocuments();

const findFirstUser = async () => {
  const user = await users.findOne();
  console.log({ user });
};
// await findFirstUser();

const findUserByName = (name) => users.findOne({ name });

const findSomeUsers = async () => {
  const adam = await findUserByName("Adam");
  const niedam = await findUserByName("nieAdam");
  console.log({ adam, niedam });
};
// await findSomeUsers();

const insertOneUser = async () => {
  const x = await users.insertOne({
    name: "Beth",
    age: 456,
    books: ["First", "Second"],
  });

  console.log({ x });
};
// await insertOneUser();

const deleteOneUser = async () => {
  const d = await users.deleteOne({
    _id: new ObjectId("6436fb62de1e093c5591cf64"),
  });
  const dm = await users.deleteMany({ name: "Beth" });
  console.log({ d, dm });
};
// await deleteOneUser();

const insertUser = async (user) => users.insertOne(user);

// insertUser({
//   name: "Maryla",
//   age: 9001,
//   books: ["The Everlasting One", "Ancient being"],
// }).then(console.log);

/* Custom MongoDB Collection Abstraction */
// const Users = new MongoCollection(client, "users");
// Users.count().then(console.log);

/* Close the connection to the Database */
// await client.close();
