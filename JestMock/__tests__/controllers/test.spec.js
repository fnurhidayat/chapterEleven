const testController = require('../../controllers/testController')
const faker = require('faker')

// Factory Function
function mockRequest() {
  return {}
}

// Factory Function
function mockResponse() {
  const res = {};
  res.status = jest.fn().mockReturnValue(res)
  res.json = jest.fn().mockReturnValue(res)
  return res
}

describe('test.upload', () => {

  test('Should alter the res object, and call status method with 200 in it', async () => {
    // Setup
    const req = mockRequest();
    const res = mockResponse()

    req.file = {};
    req.file.buffer = Buffer.alloc(10);
    req.file.originalname = faker.system.fileName()
    // End of setup

    // Do the test
    await testController.upload(req, res);

    // Expect
    expect(res.status).toBeCalledWith(200);
    expect(res.json).toBeCalledWith(
      expect.objectContaining({
        status: 'success'
      })
    )
  })

})