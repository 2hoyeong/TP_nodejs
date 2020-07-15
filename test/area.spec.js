const request = require('supertest');
const should = require('should');

const Server = require('../app');
const server = new Server();

const agent = require('./login.spec')

describe('POST /api/area/add/country', () => {
    before(done => {
        // Area.remove({}).then(done());
        done();
    });
    it('should add country', function (done) {
        agent
            .post('/api/area/add/country')
            .set('Accept','application/json')
            .send({
                "area_type" : "1",
                "name_kor" : "대한민국",
                "name_eng" : "Korea",
                "image" : "",
                "description" : "",
            })
            .expect(200)
            .end(function (err, res) {
                console.log(`err : ${err}`)
                console.log(res.body.result);
                res.body.result.should.equal(1);
                done();
            });
    });
});
