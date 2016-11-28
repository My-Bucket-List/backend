'use strict'

const User = use('App/Model/User')
const Hash = use('Hash')

class UserController {

	* register(request, response){
		let data = request.only('email', 'username', 'password');
		data.password = yield Hash.make(data.password)
		let user = yield User.create(data)

		response.status(201).json(user)
	}

}

module.exports = UserController
