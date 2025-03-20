const bcrypt = require('bcryptjs');

const { DataTypes } = require("sequelize");
const Family = require("./Family");

const User = sequelize.define("User", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  username: { type: DataTypes.STRING, allowNull: false, unique: true },
  password: { type: DataTypes.STRING, allowNull: false },
  role: { type: DataTypes.ENUM('view_only', 'editor', 'dev'), allowNull: false },
  families_id: { type: DataTypes.INTEGER, references: { model: Family, key: "id" }, allowNull: true },
});

User.belongsTo(Family, { foreignKey: "families_id" });

// // Hash password sebelum disimpan ke database
// userSchema.pre('save', async function (next) {
//     if (!this.isModified('password')) return next();
//     this.password = await bcrypt.hash(this.password, 10);
//     next();
// });

module.exports = User;
