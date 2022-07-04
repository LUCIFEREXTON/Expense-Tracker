const Expense = require('../model/Expenses')
const Category = require('../model/Category')
const Profile = require('../model/Profile')
const Type = require('../model/Type')

const serverErrorMsg = { status: 'fail', message: 'Server' }

exports.getAmount = async(req, res) => {
    try {
        const { user_id, profile_id } = req.body
        const profile = await Profile.findOne({ userId: user_id, profileId: profile_id })
        const amount = {
            total: profile.total,
            current: profile.current
        }
        return res.json({ status: 'success', amount })
    } catch (err) {
        console.log(error)
        return res.json(serverErrorMsg)
    }
}

exports.getExp = async(req, res) => {
    try {
        const { user_id, profile_id } = res.body
        const expenses = await Expense.findOne({ userId: user_id, profileId: profile_id })
        return res.json({ status: 'success', expenses })
    } catch (error) {
        console.log(error)
        return res.json(serverErrorMsg)
    }

}
exports.addExp = async(req, res) => {
    const { on, date, amount, category, type, user_id, profile_id } = req.body
    try {
        const savedExpense = await new Expense({
            on,
            date,
            type,
            amount,
            category,
            userId: user_id,
            profileId: profile_id
        }).save()
        const profile = await Profile.findOne({ id: profile_id, userId: user_id })
        profile.total -= savedExpense.amount
        profile.current -= savedExpense.amount
        const savedProfile = profile.save()

        if (saved && savedProfile) {
            return res.json({ status: 'success', expense: saved })
        }
        return res.json({ status: 'fail', message: 'Not Saved. Try again' })
    } catch (err) {
        console.log(err);
        return res.json(serverErrorMsg)
    }
}

exports.delExp = async(req, res) => {
    try {
        const { expense_id, user_id, profile_id } = req.body
        const expenses = await Expense.findOne({ id: expense_id, userId: user_id, profileId: profile_id })
        const deleted = await expenses.delete()
        if (deleted) {
            return res.json({ status: 'success' })
        }
        return res.json({ status: 'fail', message: 'Not Deleted. Try again' })
    } catch (err) {
        console.log(err);
        return res.json(serverErrorMsg)
    }
}

exports.updateExp = async(req, res) => {

}

exports.getTypesandCategory = async(req, res) => {
    try {
        const { profile_id } = req.body
        const categories = await Category.findOne({ profileId: profile_id })
        const types = await Type.findOne({ profileId: profile_id })
        if (categories && types) {
            return res.json({ status: 'success', types, categories })
        }
        return res.json({ status: 'fail', message: 'Not able to load. Try again' })
    } catch (err) {
        console.log(err);
        return res.json(serverErrorMsg)
    }
}