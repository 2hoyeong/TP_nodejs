const request = require('supertest');
const should = require('should');
const app = require('../index');

describe('GET /', () => {
  it('index should contain Hello', (done) => {
    request(app)
        .get('/')
        .expect(200)
        .expect((res) => {
            res.text.should.containEql('Hello World!');
        })
        .end((err, res) => {
            if (err) throw err;
            done();
        });
  });
});