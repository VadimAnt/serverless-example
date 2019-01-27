const dynamoose = require('dynamoose');

module.exports = dynamoose.model('User', {
  id: {
    type: String,
    hashKey: true
  },
  firstName: String,
  email: String,
});