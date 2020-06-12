const request = require('supertest');
const should = require('should');
const app = require('../app');

describe('GET /', () => {
  it('app should contain "Hello World!"', (done) => {
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