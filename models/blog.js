const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      tri: true,
      length: 25,
    },
    snippets: {
      type: String,
      required: true,
      length: 40,
    },
    body: {
      type: String,
      required: true,
      length: 500,
    },
  },
  { timestamps: true }
);

const blog = mongoose.model("blog", blogSchema);
module.exports = blog;
