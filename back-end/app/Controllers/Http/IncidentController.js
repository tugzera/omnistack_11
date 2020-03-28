"use strict";

const Incident = use("App/Models/Incident");

class IncidentController {
  async index() {
    return Incident.all();
  }

  async show({ params }) {
    return Incident.findOrFail(params.id);
  }

  async store({ request }) {
    const data = request.all();
    const item = await Incident.create(data);
    return item;
  }

  async update({ request, params }) {
    const item = await Incident.findOrFail(params.id);
    const data = request.all();
    await item.merge(data);
    await item.save();
    return item;
  }

  async destroy({ params }) {
    const item = await Incident.findOrFail(params.id);
    return item.delete();
  }
}

module.exports = IncidentController;
