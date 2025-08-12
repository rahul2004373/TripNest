// logic for initialization
const initData = require("./data.js");
const mongoose = require("mongoose");
const Listing = require("../models/listing");
// making connection with db
main()
  .then(() => {
    console.log("connection succesfull");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
}

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) =>({
    ...obj,
    owner: "67f3e8f454f3b6d8eab87462",
  }));
  await Listing.insertMany(initData.data);
  console.log("data was initialized");
};

initDB();
