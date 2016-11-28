'use strict'

const List = use('App/Model/List')

class ListController {

	* index(request, response){
		let userId = request.param('user_id')
		
		// find list by user id 
		let list = yield List.query().where('user_id', userId)
		
		//send back response
		response.status(201).json(list)
	}

	* create(request, response){
		let userId = request.param('user_id')
		let data = request.only('title', 'url', 'description')
		data.user_id = userId

		let list = yield List.create(data)

		response.status(201).json(list)
	}
}

module.exports = ListController