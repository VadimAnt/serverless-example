const uuid = require('uuid/v4');

const MessageService = require('../services/message.service');
const UserService = require('../services/user.service');

module.exports = {
  async index(req, res) {
    try {
      const { body } = req;

      const users = await UserService.getAll();

      const newMessage = await MessageService.createOne({
        userId: users[0].id,
        campaignId: uuid(),
        message: body.message,
      });

      const messages = await MessageService.getAll();

      return res.send({
        newMessage,
        messages,
      });

    } catch (e) {
      console.log(e);
    }
  }
};