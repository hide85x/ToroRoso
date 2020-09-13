const Score = require('../model/Score');
const User = require('../model/User');

exports.postUser= async (req, res, next) => {
    const { name, key } = req.body
    // console.log(name, key)
   try { const user= await User.create({
        name: name,
        key:key
    })
    res.json(user)}
    catch(err) {
        next(err)
    }
}
exports.getUsers= async (req, res, next) => {
    try {const users= await User.findAll({
        include:[Score]
    })
    // console.log(users)
    res.json(users)}
    catch(err) { console.log(err)}
}