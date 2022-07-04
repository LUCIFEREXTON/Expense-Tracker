const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    uniqueName: String
});
// Compile model from schema
module.exports = mongoose.model('User', UserSchema);