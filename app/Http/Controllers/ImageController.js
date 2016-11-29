'use strict'

const Image = use('App/Model/Image')

class ImageController {

	* indexAll(request, response){
		let images = yield Image.all()
		response.status(201).json(images)
	}

	* indexSingle(request, response){
		let user = request.authUser

		let listId = request.param('list_id')
		let imageId = request.param('id')

		let image = yield Image.query()
			.where('list_id', listId)
			.where('id', imageId)

		response.status(201).json(image)

	}

	* create(request, response){
		let user = request.authUser
		
		let listId = request.param('list_id')
		let data = request.only('caption', 'url')
		data.list_id = listId
		data.like_count = 0

		let image = yield Image.create(data)

		response.status(201).json(image)
	}

	* delete(request, response){
		let imageId = request.param('id')
		let image = yield Image.query()
			.where('id', imageId)
			.delete()

		response.status(201).json({ success: 'Image deleted'})
	}

}

module.exports = ImageController
