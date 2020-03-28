'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class IncidentsSchema extends Schema {
  up () {
    this.create('incidents', (table) => {
      table.increments()
      table.string('title').notNullable()
      table.string('description').notNullable()
      table.string('value').notNullable()
      table.string('city').notNullable()
      table.string('uf', 2).notNullable()
      table
        .integer("ong_id")
        .unsigned()
        .references("id")
        .inTable("ongs")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.timestamps()
    })
  }

  down () {
    this.drop('incidents')
  }
}

module.exports = IncidentsSchema
