const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');

const Transaction = sequelize.define('Transaction', {
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
  user_id: { type: DataTypes.UUID, references: { model: User, key: 'id' } },
  points_used: { type: DataTypes.INTEGER, allowNull: false },
  amount_converted: { type: DataTypes.FLOAT, allowNull: false },
  transaction_date: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, { timestamps: true });

User.hasMany(Transaction, { foreignKey: 'user_id' });
Transaction.belongsTo(User, { foreignKey: 'user_id' });

module.exports = Transaction;
