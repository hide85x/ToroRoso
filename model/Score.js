const Sequelize = require("sequelize");
const sequelize = require('../utills/database');

const Score = sequelize.define('score', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    score: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    userId: Sequelize.INTEGER
})

module.exports = Score