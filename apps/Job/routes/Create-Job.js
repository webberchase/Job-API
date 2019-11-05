const { graphql } = require('graphql');
const express = require('express');
const { checkKey, checkQuery } = require('../../tools');
const { jobResolvers } = require('../controllers/resolvers/Job.resolvers');
const { jobTypedefs } = require('../controllers/typeDefs/Job.typedefs');

const router = express.Router();

let createJob;

router.post('/create', checkKey, async (req, res) => createJob(req.body, res));

// create a job
createJob = async (body, res) => {
  const schema = `mutation{ createJob(
    title: "Test Job",
    client: "defnvwrt9g43598wtr",
    tags: ["Cloud", "Big Data", "AI"],
  ) {author title}}`;
  await graphql(jobTypedefs, schema, jobResolvers.Mutation).then(response => response);

  res.send('create an job');
};

module.exports.routes = router;
