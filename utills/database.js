const mysql= require('mysql2')

// const db= mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     database: 'tbullSql',
//     password: 'hide85x'
// })
const Sequelize= require('sequelize')
const sequelize= new Sequelize('tbullsql', "root", "hide85x",{
    dialect:'mysql',
    host:'localhost'
});
// async function db() {
//     const connect= await mysql.createConnection({
//         host: 'localhost',
//         user: 'root',
//         database: 'tbullSql',
//         password: 'hide85x'
//     })
//     return connect
// }

module.exports= sequelize
// module.exports= db