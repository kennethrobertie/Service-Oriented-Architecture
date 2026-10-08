const { Sequelize, DataTypes } = require('sequelize');
const connection = require('../databases/connection'); // Asumsi path connection.js

const User = connection.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: {
                msg: "Format email tidak valid"
            }
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: {
                args: [8, 100],
                msg: "Password minimal 8 karakter"
            }
        }
    }
}, {
    tableName: 'users',
    timestamps: true,
    paranoid: true, // Wajib ada untuk soft delete
    deletedAt: 'deletedAt'
});

module.exports = User