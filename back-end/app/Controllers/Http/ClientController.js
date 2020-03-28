'use strict'

const Client = use("App/Models/Client")

class ClientController {
    async index() {
        return Client.all();
      }
    
      async show({ params }) {
        return Client.findOrFail(params.id);
      }
    
      async store({ request }) {
        const data = request.all();
        const item = await Client.create(data);
        return item;
      }
    
      async update({ request, params }) {
        const item = await Client.findOrFail(params.id);
        const data = request.all();
        await item.merge(data);
        await item.save();
        return item;
      }
    
      async destroy({ params }) {
        const item = await Client.findOrFail(params.id);
        return item.delete();
      }
}

module.exports = ClientController
