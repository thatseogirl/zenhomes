import User from "../models/userModel.js"
import asyncHandler from "express-async-handler"
export const register = asyncHandler(async (req, res) => {
  const { name, email, password, radioCheck, radioCheck2 } = req.body
  const userExits = await User.findOne({ email })
  if (userExits) {
    res.status(401)
    throw new Error("try diffferent user email.alreay exits")
  } else {
    const user = await User.create({
      name,
      email,
      password,
      isTanant: radioCheck,
      isLandord: radioCheck2,
    })
    if (user) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isTanant: user.radioCheck,
        isLandord: user.radioCheck2,
        isAdmin: user.isAdmin,
      })
    } else {
      res.status(401).json({ message: "Registration failed" })
    }
  }
})
export const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    })
  } else {
    res.status(401).json({ message: "login failed" })
  }
})
