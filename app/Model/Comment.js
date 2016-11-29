'use strict'

const Lucid = use('Lucid')

class Comment extends Lucid {

	image () {
		return this.belongsTo('App/Model/Image')
	}
}

module.exports = Comment
