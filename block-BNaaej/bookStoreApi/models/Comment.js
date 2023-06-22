let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let commentSchema = new Schema(
  {
    comment: { type: String },
    author: { type: String },
    bookId: { type: Schema.Types.ObjectId, ref: 'Book' },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Comment', commentSchema);
