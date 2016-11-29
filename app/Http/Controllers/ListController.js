'use strict'

const List = use('App/Model/List')

class ListController {

	* indexAll(request, response){
		let list = yield List.all()
		response.status(201).json(list)
	}

	* indexByUser(request, response){
		let user = request.authUser

		let userId = request.param('user_id')
		
		let list = yield List.query().where('user_id', userId)
		
		response.status(201).json(list)
	}

	* indexSingle(request, response){
		let user = request.authUser

		let userId = request.param('user_id')
		let listId = request.param('id')

		let listItem = yield List.query()
			.where('user_id', userId)
			.where('id', listId)

		response.status(201).json(listItem)
	}

	* create(request, response){
		let user = request.authUser
		
		let userId = request.param('user_id')
		let data = request.only('title', 'url', 'description')
		data.user_id = userId

		let list = yield List.create(data)

		response.status(201).json(list)
	}

	* delete(request, response){
		let itemId = request.param('id')
		let item = yield List.query()
			.where('id', itemId)
			.delete()

		response.status(201).json({ success: 'Item deleted'})
	}
}

module.exports = ListController