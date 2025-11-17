
require('dotenv').config();
const { MongoClient } = require('mongodb');
const bcrypt = require('bcryptjs');

async function seed() {
  const uri = "mongodb+srv://abhirajgautam28:SDxn4uNmqkqN9gBt@emovue.rducy1i.mongodb.net/?appName=EmoVue";
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    const db = client.db();

    const email = 'user@example.com';
    const name = 'Demo User';
    const password = 'password123';

    const existingUser = await db.collection('users').findOne({ email });
    if (existingUser) {
      console.log('Demo user already exists.');
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await db.collection('users').insertOne({
      name,
      email,
      password: hashedPassword,
    });

    console.log('Demo user created successfully.');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await client.close();
  }
}

seed();
