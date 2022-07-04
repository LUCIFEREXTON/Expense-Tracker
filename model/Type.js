const { Schema, model } = require('mongoose')

module.exports = model('Type', new Schema({
    title: [String],
    profileId: {
        type: Schema.Types.ObjectId,
        ref: 'Profile'
    }
}))