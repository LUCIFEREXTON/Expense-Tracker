const Schema = mongoose.Schema;

const SomeModelSchema = new Schema({
    a_string: String,
    a_date: Date
});
// Compile model from schema
module.exports = mongoose.model('SomeModel', SomeModelSchema);