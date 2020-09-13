process.env.NODE_ENV = "test"

const User = require('../model/User');
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

const should = chai.should();

chai.use(chaiHttp)


describe('/GET users', () => {
    it('it should Get all users', (done) => {
        chai.request(app)
        .get('/getUsers')
        .end((err, res) => {
            console.log(res.body.length)
            res.body.should.be.an('array');
            done();
        });
    });
});

describe('/POST user', () => {
    it('res object should have our user model property', (done) => {
        const user = {
            name: "dswsssssss",
            key:"12ssdd1ss3"
        };

        chai.request(app)
        .post('/addUser')
        .send(user)
        .end((err, res) => {
            console.log(res.body)
            res.body.should.have.property('name');
            res.body.should.have.property('key');
            done();
        });
    });
});