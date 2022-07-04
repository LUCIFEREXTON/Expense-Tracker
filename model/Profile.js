const { Schema, model } = require('mongoose')

module.exports = model('Profile', new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    total: Number,
    current: Number
}))