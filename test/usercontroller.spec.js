// const expect = require('chai').expect;
// const db = require('../utills/database');
// const User = require('../model/User');
// const Score = require('../model/Score');

// const userController = require('../controller/user');

// describe("Usercontroller testess", async () => {

//     describe('data layer', () => {
//         it('check key to be specified value', async () => {
//             const users = await User.findAll({})
//             const user = users[0];
//             // console.log(user.dataValues)
//             expect(user.dataValues.key).to.be.equal('2222')

//         })
//         it('checks for key property in found user', async () => {
            
//             const users = await User.findAll({})
//             const user = users[0];
//             // console.log(user.dataValues)

//             expect(user.dataValues).to.have.property('key')
//         })
//     });

// })