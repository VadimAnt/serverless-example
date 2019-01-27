const UserService = require('../services/user.service');
const AWS = require('aws-sdk');
const sqs = new AWS.SQS();

module.exports = {
  async index(req, res) {
    try {
      const { body, query } = req;

      const users = await UserService.getAll();

      // Asynchronous create user
      UserService.createOne();

      const params = {
        MessageBody: 'New user!',
        QueueUrl: process.env.QUEUE_USER_NOTIFICATIONS_URL,
        DelaySeconds: 0
      };

      await sqs.sendMessage(params).promise();

      return res.send({
        body,
        query,
        users,
      });
    } catch (e) {
      console.log(e);
    }
  }
};