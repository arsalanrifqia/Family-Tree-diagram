
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    logging: false, // Matikan logging jika tidak ingin melihat query di terminal
});

module.exports = sequelize;
