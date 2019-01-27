const CampaignUserMessage = require('../models/message.model');
const uuid = require('uuid/v4');

module.exports = {
  getAll(){
    return CampaignUserMessage.scan().exec();
  },

  createOne({ userId, campaignId, message }) {
    const newMessage = new CampaignUserMessage({
      id: uuid(),
      userId,
      campaignId,
      message,
    });

    return newMessage.save();
  },
};