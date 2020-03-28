"use strict";

const User = use("App/Models/User");

class UserController {
  async index() {
    const items = await User.query()
      .with("permissions")
      .with("roles")
      .with("client")
      .with("ong")
      .fetch();
    return items;
  }

  async show({ params }) {
    const item = await User.findOrFail(params.id);
    await item.loadMany(["permissions", "roles", "client", "ong"]);
    return item;
  }

  async store({ request }) {
    const data = request.only(["email", "password"]);
    const roles = request.only("roles");

    const item = await User.create(data);
    if (roles) {
      await item.roles().attach(roles);
    }

    return item;
  }

  async update({ request, params }) {
    const item = await User.findOrFail(params.id);
    const data = request.only(["email", "password"]);
    const roles = request.only("roles");

    if (roles) {
      await item.roles().sync(roles);
    }
    await item.merge(data);
    await item.save();
    return item;
  }

  async destroy({ params }) {
    const item = await User.findOrFail(params.id);
    return item.delete();
  }
}

module.exports = UserController;
