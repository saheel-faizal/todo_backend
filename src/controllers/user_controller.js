const User = require('../models/user_schema')

exports.getAllUser = async (req,res) => {
    const user = await User.find();
    console.log(user.name)
}