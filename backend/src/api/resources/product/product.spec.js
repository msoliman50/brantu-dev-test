// 3rd party libraries
const request   = require('supertest'),
      expect    = require('expect');

// own files
const app = require('../../../../app');

// test configurations
const base_url = '/api/products';

describe('Products', () => {
    describe('GET /search', () => {

        // 200 Ok
        it('should return 200 Ok status', (done) => {
            request(app)
                .get(base_url + '/search')
                .send()
                .expect(200)
                .end((err, res) => {
                    if (err)
                        return done(err);
                        
                    done();
                });
        });

        // .. continue the other possible responses, but this just for simplicity
    });
});