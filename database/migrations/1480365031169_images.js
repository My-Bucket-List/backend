'use strict'

const Schema = use('Schema')

class ImagesTableSchema extends Schema {

  up () {
    this.create('images', (table) => {
      table.increments()
      table.integer('list_id').references('id').inTable('lists')
      table.string('url')
      table.string('caption')
      table.integer('like_count')
      table.timestamps()
    })
  }

  down () {
    this.drop('images')
  }

}

module.exports = ImagesTableSchema
