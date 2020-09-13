const express = require('express');
const bodyparser = require('body-parser');

const sequelize = require('./utills/database')
// const db= require('./utills/database');

const app = express();
app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())

const Score = require('./model/Score')
const scoreRoute = require('./routes/score')
app.use(scoreRoute);

const User = require('./model/User')
const userRoute = require('./routes/user')
app.use(userRoute)

Score.belongsTo(User)
User.hasMany(Score)


app.use((error, req, res, next) => { // to jest nasz expressowy error handler, zbiera errory z controllerow i je obsluguje
    const status = error.statusCode || 500;
    const message = error.message;
    const data = error.data;
    res.status(status).json({ message: message, data: data })
});



const port = process.env.PORT || '8000';

// db.connect(() => {
//         console.log('connected to db')
//         console.log(`listening on port ${port}`)
//         app.listen(port)


// });
//sequelzie
sequelize
    .sync()
    .then(connection => {

        console.log(`conntected to db`)
        app.listen(port, () => {
            console.log(`listening on port ${port}`)
        })
    })
    .catch(err => {
        console.log(err)
        throw err
    })


module.exports = app
