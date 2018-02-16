
var Sequelize = require('sequelize');
var sequelize = new Sequelize(undefined, undefined, undefined, {
  'dialect': 'sqlite',
  'storage': CONFIG.storage
});

console.log('CONFUG', CONFIG);
var db = {};

db.testModel = sequelize.import(CONFIG.model + 'test-model.js');
db.sequelize = sequelize;
db.Sequelize = Sequelize;


module.exports = db;
