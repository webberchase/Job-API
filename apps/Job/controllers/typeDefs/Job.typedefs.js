const { buildSchema } = require('graphql');

const defs = `
    scalar Date
    scalar JSON

    type Job {
        id: ID!
        title: String!
        client: String!
        dateCreated: Date!
        dateLastModified: Date!
        tags: [String!]!
        logs: [JSON]!
    }

    type Query {
        getJobs: [Job!]!
        getJobById(id: ID!): Job
    }

    type Mutation {
        createJob(title: String!, client: String!, tags: [String!]!): Job!
    }
`;

module.exports.jobTypedefs = buildSchema(`${defs}`);
