'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route')

Route.on('/').render('welcome')

Route.post('/register', 	 	'UserController.register')
Route.post('/login', 		 	'UserController.login')

Route.get('/lists', 		 				'ListController.indexAll')
Route.get('/lists/:user_id', 				'ListController.indexByUser')
Route.get('/lists/:user_id/list/:id', 		'ListController.indexByListItem')
Route.post('/lists/:user_id', 				'ListController.create')