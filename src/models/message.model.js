const dynamoose = require('dynamoose');

module.exports = dynamoose.model('Message', {
  id: {
    type: String,
    hashKey: true
  },
  userId: String,
  campaignId: String,
  message: String,
});