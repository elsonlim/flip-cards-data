require("dotenv").config();
require("./db.js");
const Flipcard = require("./models/Flipcard");
const { getDataFromCsv, japStrategy } = require("./getDataFromCsv");
const csvFilePath = "src/data/jap.csv";

async function updateDb() {
  const data = await getDataFromCsv(csvFilePath, japStrategy);
  console.log(data);
  await Flipcard.collection.drop();
  await Flipcard.collection.insertMany(data);
}

updateDb();
