const authModel = require("../models/auth.model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
require("dotenv").config()
exports.signup = async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await authModel.findOne({ email })

        if (user) {
            return res.json({ msg: "User already registered" })
        }

        bcrypt.hash(password, 5, async (err, hash) => {
            if (err) {
                return res.json({ msg: err })
            } else {
                const postuser = await authModel({ email, password: hash })
                await postuser.save()
                return res.json({ msg: "User registered" })
            }
        })

    } catch (error) {
        return res.json({ msg: error })
    }
}


exports.login = async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await authModel.findOne({ email })
        bcrypt.compare(password, user.password, (err, result) => {
            if (err) {
                return res.json({ msg: err })
            } else {
                let token = jwt.sign({ userId: user._id }, process.env.secretkey)
                return res.json({ msg: "User login success", token })
            }
        })

    } catch (error) {
        return res.json({ msg: error })
    }
}