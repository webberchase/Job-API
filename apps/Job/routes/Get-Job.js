const { graphql } = require('graphql');
const express = require('express');
const { checkKey, checkQuery } = require('../../tools');
const { jobResolvers } = require('../controllers/resolvers/Job.resolvers');
const { jobTypedefs } = require('../controllers/typeDefs/Job.typedefs');

const router = express.Router();

let getAllJobs;
let getJobById;

router.get('/all', checkKey, async (req, res) => getAllJobs(req.body, res));
router.get('/id', checkKey, async (req, res) => getJobById(req.body, res));

// Get all of the Jobs
getAllJobs = async (body, res) => {
  const result = await graphql(jobTypedefs,
    `{ getJobs { ${body.values} } }`,
    jobResolvers.Query).then(response => response.data);

  if (checkQuery(result, res)) {
    return;
  }
  res.send(result.getJobs);
};

// Get the Job by its ID
getJobById = async (body, res) => {
  const result = await graphql(jobTypedefs,
    `{ getJobById(id: "${body.id}") { ${body.values} } }`,
    jobResolvers.Query).then(response => response.data);

  if (checkQuery(result, res)) {
    return;
  }
  res.send(result.getJobById);
};

module.exports.routes = router;
