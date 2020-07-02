const request = require('supertest');
const should = require('should');

const Server = require('../app');
const Post = require('../src/model/Post');
const server = new Server();

const agent = require('./login.spec')

describe('POST /api/board/write/freeboard', () => {
    before(done => {
        Post.remove({}).then();
        agent
        .post('/api/login')
        .send({ id : "testuser", password : "test" })
        .end(function(err, res) {
            res.header.location.should.equal('/');
            done();
        });
    });
    it('should write post on freeboard', function (done) {
        agent
            .post('/api/board/write/freeboard')
            .set('Accept','application/json')
            .send({
                "bTitle": "testtitle", 
                "bContent" : "test content"
            })
            .expect('Content-Type', /json/)
            .expect(200)
            .end(function (err, res) {
                res.body.result.should.equal(1);
                done();
            });
    });
});