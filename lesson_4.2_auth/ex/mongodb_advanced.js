const mongoose = require("mongoose");
const { Schema } = mongoose;

async function main() {
  const DB_URL =
    "mongodb://user:123@cluster0-shard-00-00.wikpt.mongodb.net:27017,cluster0-shard-00-01.wikpt.mongodb.net:27017,cluster0-shard-00-02.wikpt.mongodb.net:27017/Node_26?ssl=true&replicaSet=atlas-l90b4i-shard-0&authSource=admin&retryWrites=true&w=majority";
  await mongoose.connect(DB_URL);

  const userSchema = new Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
  });
  const User = mongoose.model("User", userSchema);

  // for (let i = 0; i < 50; i++) {
  //   await User.create({ name: `example${i}`, age: i + 1 });
  // }

  // console.log(await User.find({ name: "example0" }).sort({ name: 1 }));

  // console.log(await User.find({ age: { $gte: 18, $lte: 35 } }));
  // console.log(await User.find({ name: { $ne: "example0" } }).sort({ name: 1 }));
  // console.log(await User.find({ age: { $in: [18, 20] } }));
  console.log(
    await User.find({ $or: [{ age: 18 }, { name: /ple1/ }] }).limit(4)
  );
}
main();