'use strict'

const Lucid = use('Lucid')

class User extends Lucid {

	static get hidden () {
    	return ['password']
  	}

	apiTokens () {
    	return this.hasMany('App/Model/Token')
  	}

	list () {
		return this.hasOne('App/Model/List')
	}
  	
}

module.exports = User
