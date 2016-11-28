'use strict'

const Schema = use('Schema')

class CommentsTableSchema extends Schema {

  up () {
    this.create('comments', (table) => {
      table.increments()
      table.integer('user_id').references('id').inTable('users')
      table.integer('list_id').references('id').inTable('lists')
      table.integer('image_id').references('id').inTable('images')
      table.string('comment')
      table.timestamps()
    })
  }

  down () {
    this.drop('comments')
  }

}

module.exports = CommentsTableSchema
