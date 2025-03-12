const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');

const Request = sequelize.define('Request', {
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
  user_id: { type: DataTypes.UUID, references: { model: User, key: 'id' } },
  status: { type: DataTypes.ENUM('pending', 'in-progress', 'completed', 'cancelled'), defaultValue: 'pending' },
  location: { type: DataTypes.STRING },
  request_date: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  weight: { type: DataTypes.FLOAT, allowNull: false },
  points_awarded: { type: DataTypes.INTEGER, defaultValue: 0 }
}, { timestamps: true });

User.hasMany(Request, { foreignKey: 'user_id' });
Request.belongsTo(User, { foreignKey: 'user_id' });

module.exports = Request;
