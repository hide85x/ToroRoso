const Sequelize = require("sequelize");
const sequelize = require('../utills/database');

const User = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: true
    },
    name: {
        type: Sequelize.STRING,
        unique: true,
    },
    key: {
        type: Sequelize.STRING,
        unique: true
    }
})

module.exports = User