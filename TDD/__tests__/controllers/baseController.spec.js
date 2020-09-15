// Import Fungsinya
const base = require('../../controllers/baseController.js')

/* Karena kita tahu base.index adalah callback function dari router[METHOD](endpoint, callback)
   Maka kita perlu melakukan peniruan parameter dari callback tersebut,
   Yaitu req dan res. Req dan Res adalah object yang masing-masing memiliki fungsi, yang harus kita sediakan
   Meskipun fungsi tersebut adalah hasil mockup */
const mockRequest = (body = {}) => ({
  body
}) 
/* Kita juga tahu bahwa res memiliki fungsi status dan json. 
   Dari informasi tersebut, kita bisa membuat tiruan dari res
   Dengan membuat object res yang memiliki json dan status
   dimana json adalah jest function, basically adalah sebuah fungsi,
   Namun bedanya kita bisa memonitor fungsi tersebut dipanggil dengan
   argumen apa saja. Dan juga, kita juga tahu,
   res.status biasanya dipanggil dengan json 
   Artinya return value dari status adalah res itu sendiri. */
const mockResponse = () => {
  const res = {}
  res.json = jest.fn().mockReturnValue(res)
  res.status = jest.fn().mockReturnValue(res)
  return res
}

describe('base.index function', () => {
  // Kita akan melakukan test terhadap fungsi base.index
  // Dan kita akan memastikan res.json dipanggil dengan parameter
  // { status: true, message: "Hello World" }
  test('res.json called with { status: true, message: "Hello World" }', done => {
    const req = mockRequest()
    const res = mockResponse()
    base.index(req, res)

    expect(res.status).toBeCalledWith(200)
    expect(res.json).toBeCalledWith({
      status: true,
      message: "Hello World!"
    })
    done()
  })
})

describe('base.sum function', () => {
  test('res.json called with { ...basicResponse, data: { x: x, y: y, result: x + y } }', done => {
    const req = mockRequest({ x: 5, y: 10 })
    const res = mockResponse()
    const expectedResult = req.body.x + req.body.y

    base.sum(req, res)
    expect(res.status).toBeCalledWith(200)
    expect(res.json).toBeCalledWith({
      status: true,
      message: "Parameters summarized!",
      data: { x: req.body.x, y: req.body.y, result: req.body.x + req.body.y }
    })
    done()
  })
})
