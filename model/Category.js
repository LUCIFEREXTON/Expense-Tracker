const { Schema, model } = require('mongoose')

module.exports = model('Category', new Schema({
    title: [String],
    profileId: {
        type: Schema.Types.ObjectId,
        ref: 'Profile'
    }
}))