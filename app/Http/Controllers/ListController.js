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
		// let userId = request.param('user_id')
		let listId = request.param('id')

		let listItem = yield List.query()
			// .where('user_id', userId)
			.where('id', listId)

		response.status(201).json(listItem)
	}

	* create(request, response){
		console.log('BE req: ', request.all())
		let user = request.authUser

		console.log('BE user: ', user)
		let data = request.only('title', 'url', 'description')
		
		data.user_id = user.id
		console.log('BE data w/ user id: ', data)

		let list = yield List.create(data)
		console.log('BE response: ', list)

		response.status(201).json(list)
	}

	* delete(request, response){
		let user = request.authUser
		let itemId = request.param('id')
		let item = yield List.query()
			.where('id', itemId)
			.delete()

		response.status(201).json({ success: 'Item deleted'})
	}

	* update(request, response){
		let user = request.authUser
		let data = request.only('title', 'url', 'description') // get new data
		let itemId = request.param('id') // get id of current list item
		let item = yield List.findBy('id', itemId) // get current list item
		
		if (item.title !== data.title) { 
			item.title = data.title
			yield item.save()
		} 
		
		if (item.url !== data.url){
			item.url = data.url
			yield item.save()
		} 
		
		if (item.description !== data.description){
			item.description = data.description
			yield item.save()
		} 

		response.status(201).json(item)

	}
}

module.exports = ListController