const request = require('supertest');
const should = require('should');

const Server = require('../app');
const Post = require('../src/model/Post');
const server = new Server();

describe('POST /api/board/write/freeboard', () => {
    beforeEach(done => {
        request.agent(server.app)
        .post('/api/login')
        .send({ id : "testuser", password : "test" })
        .end(function(err, res) {
            res.header.location.should.equal('/');
            done();
        });
    });
    it('should write post on freeboard', function (done) {
        request(server.app)
            .post('/api/board/write/freeboard')
            .set('Accept','application/json')
            .send({
                "author": "testuser", 
                "boardName": "freeboard", 
                "title": "testtitle", 
                "content" : "test content"
            })
            .expect('Content-Type', /json/)
            .expect(200)
            .end(function (err, res) {
                console.log(res.body)
                res.body.result.should.equal(1);
                done();
            });
    });
});