const { dbs } = require('../../configs');

module.exports.Job = dbs.db1().model('Job', {
  title: String,
  client: String, // the id of the client document
  dateCreated: Date,
  dateLastModified: Date,
  tags: [String],
  logs: [{}]
  // More to add ...
});
