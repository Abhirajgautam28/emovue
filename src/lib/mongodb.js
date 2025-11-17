
import { MongoClient } from 'mongodb';

const uri = "mongodb+srv://abhirajgautam28:SDxn4uNmqkqN9gBt@emovue.rducy1i.mongodb.net/?appName=EmoVue";
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let client;
let clientPromise;

if (!global._mongoClientPromise) {
  client = new MongoClient(uri, options);
  global._mongoClientPromise = client.connect();
}
clientPromise = global._mongoClientPromise;

export default clientPromise;
