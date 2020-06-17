const request = require('supertest');
const should = require('should');

const Server = require('../app');
const server = new Server();

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

describe('POST /api/login', () => {
    
});