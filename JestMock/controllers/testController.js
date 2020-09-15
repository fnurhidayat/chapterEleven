const Imagekit = require('imagekit')
const imagekit = new Imagekit({
  publicKey : process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey : process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint : 'https://ik.imagekit.io/latihan/'
})


module.exports = {
  async upload(req, res) {
    const image = await imagekit.upload({
      file: req.file.buffer,
      fileName: req.file.originalname
    })

    res.status(200).json({
      status: 'success',
      data: {
        url: image.url
      }
    })
  }
}