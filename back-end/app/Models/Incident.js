"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Incident extends Model {
  static get table() {
    return "incidents";
  }
}

module.exports = Incident;
