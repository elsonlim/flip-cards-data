require("dotenv").config();
const db = require("./db.js");
const mongoose = require("mongoose");
const Flipcard = require("./models/Flipcard");
const { getDataFromCsv, japStrategy } = require("./getDataFromCsv");
const csvFilePath = "src/data/jap.csv";

async function closeDb() {
  await mongoose.connection.close();
  await db.close();
}

async function updateDb() {
  const data = await getDataFromCsv(csvFilePath, japStrategy);
  console.log(data);
  await Flipcard.deleteMany({});
  await Flipcard.collection.insertMany(data);
}

updateDb().then(async () => {
  console.log("Close DB");
  await closeDb();
  console.log("DB closed. Good Bye");
});
