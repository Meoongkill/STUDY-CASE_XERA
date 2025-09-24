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

// Impor semua model DAN assign ke objek db
db.users = require('./user.model.js')(sequelize, DataTypes);      // <-- Bagian penting
db.services = require('./service.model.js')(sequelize, DataTypes);  // <-- Bagian penting
db.orders = require('./order.model.js')(sequelize, DataTypes);      // <-- Bagian penting

// Definisikan Asosiasi / Hubungan Antar Tabel
// 1. Hubungan User dan Order
db.users.hasMany(db.orders, { as: "orders" });
db.orders.belongsTo(db.users, {
  foreignKey: "userId",
  as: "user",
});

// 2. Hubungan Service dan Order
db.services.hasMany(db.orders, { as: "orders" });
db.orders.belongsTo(db.services, {
  foreignKey: "serviceId",
  as: "service",
});


module.exports = db;