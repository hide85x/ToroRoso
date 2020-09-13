const express = require('express')
const router = express.Router();

// const isAuth = require('../utills/is-auth');
const userController= require('../controller/user')
//sequelize
router.post('/addUser', userController.postUser);


router.get('/getUsers', userController.getUsers);


module.exports = router




//sql
// router.post('/addUser', (req, res, next) => {
//     const { name, key, id} = req.body
//     db.promise().query('INSERT INTO users SET ?', req.body)
//         .then(ok => console.log(ok))
//         .catch(err=> console.log(err))
//     res.json({msg: "Cool we got user", data: req.body})
// })

// router.get('/getUsers',async (req, res, next) => {
//    await db.query("SELECT * FROM users", (err, rows, fields)=> {

//         console.log(rows + " dupa")
//         res.json({rows, msg:"dupa"})
//     })
//     })
