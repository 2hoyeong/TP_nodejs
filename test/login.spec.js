const request = require('supertest');
const should = require('should');

const Server = require('../app');
const User = require('../src/model/User');
const server = new Server();

let agent = request.agent(server.app);

describe('GET /login', () => {
  it('login view should contain text', (done) => {
    request(server.app)
        .get('/login')
        .expect(200)
        .expect((res) => {
            res.text.should.containEql('회원이 아니세요?');
        })
        .end((err, res) => {
            if (err) throw err;
            done();
        });
  });
});

describe('GET /forgot_id', () => {
    it('forgot_id should contain text', (done) => {
        request(server.app)
            .get('/forgot_id')
            .expect(200)
            .expect((res) => {
                res.text.should.containEql('ID 찾기');
            })
            .end((err, res) => {
                if (err) throw err;
                done();
            });
    });
});

describe('GET /forgot_pw', () => {
  it('forgot_pw should contain text', (done) => {
    request(server.app)
        .get('/forgot_pw')
        .expect(200)
        .expect((res) => {
            res.text.should.containEql('비밀번호 찾기');
        })
        .end((err, res) => {
            if (err) throw err;
            done();
        });
  });
});

describe('POST /api/register', () => {
    beforeEach(done => {
        User.remove({}).then(done());
    });
    it('should registe user', function (done) {
        request(server.app)
            .post('/api/register')
            .set('Accept','application/json')
            .send({"id": "testuser", "password_1": "test", "password_2": "test", "email" : "testuser@travelplanner.com"})
            .expect('Content-Type', /json/)
            .expect(200)
            .end(function (err, res) {
                res.body.result.should.equal(1);
                done();
            });
    });
});

describe('POST /api/login', () => {
    it('should get user session for current user', function (done) {
        agent
            .post('/api/login')
            .set('Accept','application/json')
            .send({"id": "testuser", "password": "test"})
            .expect('Content-Type', /json/)
            .expect(302)
            .end(function (err, res) {
                if (Object.keys(res.body).length !== 0) {
                    res.body.result.should.not.equal(0);
                }
                done();
            });
    });
})

module.exports = agent;