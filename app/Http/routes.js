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

Route.post('/register', 	 				'UserController.register')
Route.post('/login', 		 				'UserController.login')

Route.get('/goals', 		 				'ListController.indexAll')
Route.get('/user/:user_id', 				'ListController.indexByUser').middleware('auth')
Route.post('/goals',			 			'ListController.create').middleware('auth')
Route.get('/goals/:id', 					'ListController.indexSingle').middleware('auth')
Route.delete('goals/:id',			 		'ListController.delete').middleware('auth')
Route.patch('/goals/:id', 					'ListController.update').middleware('auth')
Route.patch('/goals/:id/completed', 		'ListController.completed').middleware('auth')

Route.get('/list/:list_id/images', 			'ImageController.indexAll').middleware('auth')
Route.get('/list/:list_id/images/:id',		'ImageController.indexSingle').middleware('auth')
Route.delete('/list/:list_id/images/:id', 	'ImageController.delete').middleware('auth')
Route.post('/list/:list_id/images', 		'ImageController.create').middleware('auth')
Route.patch('/list/:list_id/images/:id', 	'ImageController.updateLikeCount').middleware('auth')

Route.get('/image/:image_id/comments', 		'CommentController.indexAll').middleware('auth')
Route.post('/image/:image_id/comments', 	'CommentController.create').middleware('auth')
Route.get('/image/:image_id/comment/:id', 	'CommentController.indexSingle').middleware('auth')
Route.delete('/image/:image_id/comment/:id','CommentController.delete').middleware('auth')
Route.patch('/image/:image_id/comment/:id', 'CommentController.update').middleware('auth')