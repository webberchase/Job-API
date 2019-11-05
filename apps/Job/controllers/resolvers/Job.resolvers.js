const { Job } = require('../../models/Job');

const getJobs = () => Job.find();

const getJobById = id => Job.findById(id);

const createJob = async (title, client, [tags]) => {
  const dateCreated = new Date();
  const dateLastModified = dateCreated;
  const job = new Job({
    title, client, dateCreated, dateLastModified, tags,
  });
  await job.save();
  return job;
};

// Functions condenced to be exported
const jobResolvers = {
  Query: {
    getJobs: () => getJobs(),
    getJobById: ({ id }) => getJobById(id)
  },
  Mutation: {
    createJob: async ({
      title, client, tags
    }) => createJob(title, client, [tags]),
  }
};

module.exports.jobResolvers = jobResolvers;
