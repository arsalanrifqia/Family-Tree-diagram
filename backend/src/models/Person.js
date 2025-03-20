const { DataTypes } = require("sequelize");
const Family = require("./Family");

const Person = sequelize.define("Person", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  full_name: { type: DataTypes.STRING, allowNull: false },
  birth_date: { type: DataTypes.DATE, allowNull: true },
  gender: { type: DataTypes.ENUM("Male", "Female"), allowNull: false },
  phone: { type: DataTypes.STRING, allowNull: true },
  email: { type: DataTypes.STRING, unique: true, allowNull: true },
  biological_mother_id: { type: DataTypes.INTEGER, allowNull: true },
  biological_father_id: { type: DataTypes.INTEGER, allowNull: true },
  families_id: { type: DataTypes.INTEGER, references: { model: Family, key: "id" }, allowNull: true },
});

Person.belongsTo(Family, { foreignKey: "families_id" });

module.exports = Person;

