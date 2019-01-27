const AWS = require('aws-sdk');
const sqs = new AWS.SQS();

module.exports = {
  async compute (event, context, callback) {
    const { Records } = event;
    console.log(Records);
    await Promise.all(Records.map((record) => {
      console.log(record.ReceiptHandle);
      sqs.deleteMessage({
        QueueUrl: process.env.QUEUE_USER_NOTIFICATIONS_URL,
        ReceiptHandle: record.ReceiptHandle
      });
    }));

    return callback();
  }
};