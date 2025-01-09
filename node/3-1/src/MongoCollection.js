export class MongoCollection {
  constructor(client, collectionName) {
    this.collection = client.db("test-db").collection(collectionName);
  }

  async count() {
    return this.collection.countDocuments();
  }

  async find(filter) {
    return this.collection.find(filter);
  }

  async findOne(filter) {
    return this.collection.findOne(filter);
  }

  async insertOne(document) {
    return this.collection.insertOne(document);
  }

  async insertMany(documents) {
    return this.collection.insertMany(documents);
  }

  async deleteOne(filter) {
    return this.collection.deleteOne(filter);
  }

  async deleteMany(filter) {
    return this.collection.deleteMany(filter);
  }

  async updateOne(filter, update) {
    return this.collection.updateOne(filter, update);
  }
}
