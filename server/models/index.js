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
db.services = require('./service.model.js')(sequelize, DataTypes);
db.orders = require('./order.model.js')(sequelize, DataTypes);

// To Do List
// Definisikan Relasi Antar Tabel sebagai berikut
// 1. Satu User bisa punya banyak order
// 2. Satu service bisa ada di banyak order
// nanti aku lengkapin
// -Jakdam

module.exports = db;
