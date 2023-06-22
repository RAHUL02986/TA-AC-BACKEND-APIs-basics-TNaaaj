var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var countrySchema = new Schema(
  {
    name: String,
    state: [{ type: Schema.Types.ObjectId, ref: 'State' }],
    countinent: String,
    population: Number,
    ethincity: [String],
    neighbouring_countries: [{ type: Schema.ObjectId, ref: 'country' }],
    area: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model('Country', countrySchema);
