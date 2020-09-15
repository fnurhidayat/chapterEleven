const app = require('../../server'); // Import server
const supertest = require('supertest');
const request = supertest(app); // Create request instance

// Actual Jest global function
describe('GET /', () => {
  test("Should return 200", done => {
    // Request is a promise
    request.get('/').then(res => {
      expect(res.statusCode).toBe(200); // Expecting the response code to be 200
      expect(res.body).toHaveProperty('status') // Expect that the response body has status property
      expect(res.body).toHaveProperty('message') // Expect that the response body has message property
      expect(res.body.status).toBe('success') // Expect it to be success 
      expect(res.body.message).toBe('Bukak sithik jest!') // Expect it to be success 
      done() // To stop the test case and it means it works as it expected
    })
  })
})
