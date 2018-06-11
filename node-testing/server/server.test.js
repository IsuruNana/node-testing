const request = require('supertest');
const expect = require('expect');

let app = require('./server').app;

describe('Server', () => {
    describe('GET /', () => {
        it('should return hello world response', (done) => {
            request(app)
                .get('/')
                .expect(200)
                .expect(res => {
                    expect(res.body).toInclude({
                        signal: 'Page exists'
                    });
                })
                .end(done);
        });
    });
});

