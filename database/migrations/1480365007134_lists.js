'use strict'

const Schema = use('Schema')

class ListsTableSchema extends Schema {

  up () {
    this.create('lists', (table) => {
      table.increments()
      table.integer('user_id').references('id').inTable('users')
      table.string('title')
      table.string('url')
      table.string('description')
      table.boolean('completed').defaultTo(false)
      table.timestamps()
    })
  }

  down () {
    this.drop('lists')
  }

}

module.exports = ListsTableSchema
