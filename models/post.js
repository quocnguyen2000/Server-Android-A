const mongoose = require("mongoose");
//Model được định nghĩa thông qua giao diện Schema. 
const Schema = mongoose.Schema;
const Post = new mongoose.Schema({
  title: { type: String },
  description: { type: String },
  author: { type: Schema.Types.ObjectId, ref: "User", required: true },
});

module.exports = mongoose.model("Post", Post);
