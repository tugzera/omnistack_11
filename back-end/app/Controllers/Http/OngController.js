"use strict";

const Ong = use("App/Models/Ong");

class OngController {
  async index() {
    const items = await Ong.query()
      .with("incidents")
      .fetch();
    return items;
  }

  async show({ params }) {
    const item = await Ong.findOrFail(params.id);
    await item.load("incidents");
    return item;
  }

  async store({ request }) {
    const data = request.all();
    data.uid = String(Date.now());
    const item = await Ong.create(data);
    return item;
  }

  async update({ request, params }) {
    const item = await Ong.findOrFail(params.id);
    const data = request.all();
    await item.merge(data);
    await item.save();
    return item;
  }

  async destroy({ params }) {
    const item = await Ong.findOrFail(params.id);
    return item.delete();
  }
}

module.exports = OngController;
