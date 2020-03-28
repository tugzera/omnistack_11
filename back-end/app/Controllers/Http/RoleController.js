"use strict";

const Role = use("App/Models/Role");

class RoleController {
  async index() {
    return Role.all();
  }

  async show({ params }) {
    return Role.findOrFail(params.id);
  }

  async store({ request }) {
    const data = request.all();
    const item = await Role.create(data);
    return item;
  }

  async update({ request, params }) {
    const item = await Role.findOrFail(params.id);
    const data = request.all();
    await item.merge(data);
    await item.save();
    return item;
  }

  async destroy({ params }) {
    const item = await Role.findOrFail(params.id);
    return item.delete();
  }
}

module.exports = RoleController;
