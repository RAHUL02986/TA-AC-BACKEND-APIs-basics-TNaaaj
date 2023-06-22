var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var categorySchema = new Schema({
  name: String,
  bookId: [{ type: Schema.Types.ObjectId, ref: 'Book' }],
});
module.exports = mongoose.model('Category', categorySchema);
