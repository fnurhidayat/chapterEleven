const app = require('../../server')
const supertest = require('supertest')
const request = supertest(app);
const path = require('path')
const Imagekit = require('imagekit');

describe('POST /test/upload', () => {

  test("Should return 200", done => {
    request.post('/test/upload')
      .attach('image', path.resolve(__dirname, '..', 'fixtures', 'test.png'))
      .then(res => {
        // Make sure that the imagekit upload, is being called once
        expect(Imagekit.prototype.upload.mock.calls.length).toBe(1)
        
        done()
      })
  })

})