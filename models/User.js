const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

const salt = 5;
const hashPassword = async (password) => {
  password = await bcrypt.hash(password, salt);
  return password;
};

class User extends Model {
  async authPassword(logPassword) {
    const auth = bcrypt.compare(logPassword, this.password);
    return auth;
  }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
      },
    },
  },
  {
    sequelize,
    underscored: true,
    modelName: 'user',
    timestamps: false,
    hooks: {
      beforeCreate: async (userData) => {
        userData.password = await hashPassword(userData.password);
        if (userData.email) userData.email = userData.email.toLowerCase();
      },
      beforeUpdate: async (userData) => {
        if (userData.password) {
          userData.password = await hashPassword(userData.password);
        }
        userData.email = userData.email.toLowerCase();
      },
    },
  }
);

module.exports = User;
