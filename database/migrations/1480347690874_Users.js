'use strict'

const Schema = use('Schema')

class UsersTableSchema extends Schema {

  up () {
    this.create('Users', (table) => {
      table.increments()
      table.string('email').unique()
      table.string('username').unique()
      table.string('password')
      table.string('url')
      table.timestamps()
    })
  }

  down () {
    this.drop('Users')
  }

}

module.exports = UsersTableSchema
