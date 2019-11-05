const express = require('express');

// Bring in routes
const GetJob = require('./Get-Job');
const CreateJob = require('./Create-Job');

const router = express.Router();

// Add routes to the router
router.use('/', GetJob.routes);
router.use('/', CreateJob.routes);

module.exports.routes = router;
