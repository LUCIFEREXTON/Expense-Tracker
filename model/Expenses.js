const { model, Schema } = require('mongoose')

const ExpenseModel = new Schema({
    on: String,
    date: Date,
    type: String,
    category: String,
    amount: Number,
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    profileId: {
        type: Schema.Types.ObjectId,
        ref: 'Profile'
    }
})

module.exports = model('Expense', ExpenseModel)