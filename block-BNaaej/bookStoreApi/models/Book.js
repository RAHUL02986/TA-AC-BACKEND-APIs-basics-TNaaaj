var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bookSchema = new Schema(
  {
    title: { type: String },
    discription: { type: String },
    author: { type: String },
    categoryId: [{ type: Schema.Types.ObjectId, ref: 'Category' }],
    tags: [{ type: String }],
    commentId: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
  },
  { timestamps: true }
);

module.exports = mongoose.model('Book', bookSchema);
