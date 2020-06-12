const request = require('supertest');
const should = require('should');
const app = require('../app');

describe('GET /', () => {
  it('app should contain logo image', (done) => {
    request(app)
        .get('/')
        .expect(200)
        .expect((res) => {
            res.text.should.containEql('<img src="images/logo.png" class="logo fl" alt="지구 한바퀴">');
        })
        .end((err, res) => {
            if (err) throw err;
            done();
        });
  });
});