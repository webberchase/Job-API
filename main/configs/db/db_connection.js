const mongoose = require('mongoose');
const { dbs } = require('./db_config');

const db1 = () => {
  mongoose.connect(dbs.db1.database, { useNewUrlParser: true });
  return mongoose;
};

module.exports.dbs = {
  db1,
};
