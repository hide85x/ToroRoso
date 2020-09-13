const expect = require('chai').expect;
const tokenCheck = require('../utills/is-auth');

// describe('2 i 3', function () {
//     it('should add numbers correctly', function () {
//         const num1 = 2;
//         const num2 = 3;
//         expect(num1 + num2).to.equal(5)

//     })
// })
describe('token checker', function () {
    it('should throw err if no auth header is there in req',function () {
        const req =  {
            get: function (authHeader) {
                return null
            }
        };
        expect(tokenCheck.bind(this, req, {}, () => { })).to.throw('Not authenticated!')
    })
    it('shpould throw error if auth header is only one string', () => {
        const req = {
            get: function (authHeader) {
                return "xyz"
            }
        }
        expect(tokenCheck.bind(req, {}, () => { })).to.throw(Error)
    })
    it('should have token in req object', () => {
        const req = {
            get: function(authHeader){
                return 'Bearer 123'
            }
        };
        tokenCheck(req, {}, () => { });
        expect(req).to.have.property('token')
    })
});