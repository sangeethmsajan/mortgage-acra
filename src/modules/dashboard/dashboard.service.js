const repo = require('./dashboard.repository');
exports.getData = async () => {
  return repo.getData();
};
