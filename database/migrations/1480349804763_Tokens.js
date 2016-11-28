'use strict'

const Schema = use('Schema')

class TokensTableSchema extends Schema {

  up () {
    this.create('=Tokens', (table) => {
      table.increments()
      table.integer('user_id').references('id').inTable('Users')
 	    table.string('token', 40).notNullable().unique()
      table.boolean('forever').defaultTo(false)
      table.boolean('is_revoked').defaultTo(false)
      table.timestamp('expiry')
      table.timestamps()
    })
  }

  down () {
    this.drop('Tokens')
  }

}

module.exports = TokensTableSchema
