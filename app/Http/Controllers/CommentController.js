'use strict'

const Comment = use('App/Model/Comment')
const Image = use('App/Model/Image')

class CommentController {

	* indexAll(request, response){
		let user = request.authUser

		let comments = yield Comment.all()
		response.status(201).json(comments)
	}

	* indexSingle(request, response){
		let user = request.authUser

		let imageId = request.param('image_id')
		let commentId = request.param('id')

		let comment = yield Comment.query()
			.where('image_id', imageId)
			.where('id', commentId)

		response.status(201).json(comment)
	}

	* create(request, response){
		let user = request.authUser

		let imageId = request.param('image_id')	
		let image = yield Image.find(imageId)
		let loggedInUser = user.id

		let data = request.only('comment')
		data.image_id = imageId
		data.user_id = loggedInUser
		data.list_id = image.original.list_id

		let newComment = yield Comment.create(data)

		response.status(201).json(newComment)
	}
}

module.exports = CommentController
