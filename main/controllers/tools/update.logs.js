const { getLogMessage } = require('./logMessages');
const { Project } = require('../../../apps/Project/project_exports');

let updateLogs;
let updateProject;

module.exports.updateLogs = async (
  id, type, messageNumber, logValue
) => updateLogs(id, type, messageNumber, logValue);

updateLogs = (id, type, messageNumber, logValue) => {
  let logVal = '';
  if (logValue !== undefined) {
    logVal = logValue;
  }
  return updateProject(id, type, messageNumber, logVal);
};

updateProject = async (id, type, messageNumber, logValue) => {
  const newDate = new Date();
  const date = newDate.toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'
  });
  const val = {
    time: newDate,
    value: `${date} | ${getLogMessage[type.toLowerCase()][messageNumber]}${logValue}`
  };
  const result = await Project.findByIdAndUpdate(id,
    { $push: { logs: { $each: [val], $sort: -1 } } },
    { new: true })
    .then(r => r);
  return result;
};
