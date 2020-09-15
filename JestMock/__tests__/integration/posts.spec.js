const app = require('../../server'); // Import server
const supertest = require('supertest');
const request = supertest(app); // Create request instance
const { Post } = require('../../models'); // Require the Post model

/*
 * In order to understand this code
 * Please read these following documentation
 * 
 * Jest Expect
 * https://jestjs.io/docs/en/expect
 *
 * Jest Hooks
 * https://jestjs.io/docs/en/api
 * */

describe('Post API Collection', () => {

  // Run before every test below
  beforeAll(() => {
    /*
     * Because we're running on Test environment
     * We need to cleanup database, before the test
     * and after the test
     * */

    // Return the promise
    return Post.destroy({ truncate: true })
  })

  // Run after all of the test below
  afterAll(() => {
    // Return the promise
    return Post.destroy({ truncate: true })
  })

  describe('POST /posts', () => {

    // Positive test (Means that it has to be success)
    test('Should succesfully create new post', done => {

      request.post('/posts')
        .set('Content-Type', 'application/json') // Send JSON Request
        .send({ title: 'Hello World', body: 'Lorem ipsum dolor sit amet' })
        .then(res => {
          expect(res.statusCode).toBe(201);
          expect(res.body).toHaveProperty('status') // Expect that the response body has status property
          expect(res.body).toHaveProperty('data') // Expect that the response body has data property

          expect(res.body.status).toBe('success') // Expect it to be success 
          expect(res.body.data).toHaveProperty('post') // Expect it to have post 

          expect(res.body.data.post)
            .toEqual(
              expect.objectContaining({
                id: expect.any(Number),
                title: expect.any(String),
                body: expect.any(String),
              })
            );
          done() // To stop the test case and it means it works as it expected 
        })
    })

    // Negative test (Means that it has to be failed)
    test('Should not create post due to mismatch data type', done => {

      request.post('/posts')
        .set('Content-Type', 'application/json') // Send JSON Request
        .send({ title: 100, body: null })
        .then(res => {
          expect(res.statusCode).toBe(422);
          expect(res.body).toHaveProperty('status') // Expect that the response body has status property
          expect(res.body).toHaveProperty('errors') // Expect that the response body has errors property

          expect(res.body.status).toBe('fail') // Expect it to be fail 
          done() // To stop the test case and it means it works as it expected 
        })
    })

  })

  describe('GET /posts', () => {

    // Positive test (Means that it has to be success)
    test('Should succesfully get all post', done => {

      request.get('/posts')
        .then(res => {
          expect(res.statusCode).toBe(200);
          expect(res.body).toHaveProperty('status') // Expect that the response body has status property
          expect(res.body).toHaveProperty('data') // Expect that the response body has data property

          expect(res.body.status).toBe('success') // Expect it to be success 
          expect(res.body.data).toHaveProperty('posts') // Expect it to have post 

          expect(res.body.data.posts).toEqual(
            expect.any(Array)
          ) // Expecting posts to be an Array

          done() // To stop the test case and it means it works as it expected 
        })
    })

  })

})
