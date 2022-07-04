const User = require('../model/User')
exports.login = async(req, res) => {
    try {
        const { user } = req.body
        const oldUser = await User.find({ uniqueName: user })
        if (oldUser) {
            return res.json({ status: 'fail', message: "Name already present" })
        }
        const newUser = new user.User({
            uniqueName: user
        })
        const savedUser = await newUser.save()
        if (savedUser) {
            return res.json({ status: 'success', user })
        }
    } catch (err) {
        console.log(err)
        return res.json({ status: 'fail', message: 'Server Error. Try again later' })
    }
}