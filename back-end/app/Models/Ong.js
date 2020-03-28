"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Ong extends Model {
  static get table() {
    return "ongs";
  }

  incidents() {
    return this.hasMany("App/Models/Incident");
  }
}

module.exports = Ong;
