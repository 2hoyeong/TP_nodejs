const request = require('supertest');
const should = require('should');

const Server = require('../app');
const server = new Server();

describe('GET /', () => {
  it('header should contain logo image', (done) => {
    request(server.app)
        .get('/')
        .expect(200)
        .expect((res) => {
            res.text.should.containEql('<img src="/images/logo.png" class="logo fl" alt="지구 한바퀴">');
        })
        .end((err, res) => {
            if (err) throw err;
            done();
        });
  });
  
  it('index should contain input searching', (done) => {
    request(server.app)
        .get('/')
        .expect(200)
        .expect((res) => {
            res.text.should.containEql('<input class="search_input" id="city_search" placeholder="국가명, 도시명으로 검색">');
        })
        .end((err, res) => {
            if (err) throw err;
            done();
        });
  });

  it('footer should contain copyright phrase', (done) => {
    request(server.app)
        .get('/')
        .expect(200)
        .expect((res) => {
            res.text.should.containEql('Copyright ⓒ 2019 travelplanner.com, All Rights Reserved.');
        })
        .end((err, res) => {
            if (err) throw err;
            done();
        });
  });
});