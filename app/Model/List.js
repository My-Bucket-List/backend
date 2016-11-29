'use strict'

const Lucid = use('Lucid')

class List extends Lucid {

	user () {
		return this.belongsTo('App/Model/User')
	}

	images () {
		return this.hasMany('App/Model/Image')
	}
}

module.exports = List
