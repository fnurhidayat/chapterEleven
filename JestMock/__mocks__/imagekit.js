const Imagekit = jest.genMockFromModule('imagekit')
const faker = require('faker')

Imagekit.prototype.upload = jest.fn().mockReturnValue(
	Promise.resolve({
		url: faker.image.image() 
	})
)

module.exports = Imagekit