'use strict'

const Lucid = use('Lucid')

class Image extends Lucid {

	list () {
		return this.belongsTo('App/Model/List')
	}

	comments () {
		return this.hasMany('App/Model/Comment')
	}
}

module.exports = Image
