module.exports = {
  compute (event, context, callback) {
    const { Records } = event;

    return callback();
  }
};