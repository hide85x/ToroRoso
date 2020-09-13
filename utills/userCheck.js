const User= require('../model/User')


module.exports = async (req, res, next) => {
    const token = req.token;
    console.log(`token from userCheck  : ${token}`)
    try {
        // await User.find({ key: token })
        const isUserAuth =await User.findAll({where: {key: token}})
        console.log(isUserAuth)
        if (isUserAuth.length ==0) {
            const error = new Error("wrong token ")
            throw error
        }
        console.log(isUserAuth[0])
        const loggedUser = isUserAuth[0]
        if (isUserAuth.length === 0) {
            const error = new Error('there is no user with given token/key');
            throw error

        }
        console.log(loggedUser + " from helper")
        req.loggedUser = loggedUser


    }
    catch (error) {
        //jezeli uzywamy func async to musimy zawsze nextowac errors
        next(error)
    }
    next()
  
}