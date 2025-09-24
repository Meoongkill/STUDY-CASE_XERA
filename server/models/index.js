const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config/config.json')['development'];

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: config.dialect
  }
);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Impor models
db.users = require('./user.model.js')(sequelize, DataTypes);
// Nanti kita akan tambah model lain di sini, seperti db.orders, dll.

module.exports = db;