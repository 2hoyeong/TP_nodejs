const request = require('supertest');
const should = require('should');

const Server = require('../app');
const Post = require('../src/model/Post');
const Reply = require('../src/model/Reply');
const server = new Server();

const agent = require('./login.spec')

describe('POST /api/board/write/freeboard', () => {
    before(done => {
        Post.remove({}).then(done());
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

describe('POST /api/comment/write', () => {
    before(done => {
        Reply.remove({}).then(done());
    });
    it('should write post on freeboard', function (done) {
        agent
            .post('/api/comment/write')
            .set('Accept','application/json')
            .send({
                "postNumber": "1", 
                "content" : "reply test content"
            })
            .expect('Content-Type', /json/)
            .expect(200)
            .end(function (err, res) {
                res.body.result.should.equal(1);
                done();
            });
    });
});