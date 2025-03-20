const { DataTypes } = require("sequelize");
const Person = require("./Person");

const Partner = sequelize.define("Partner", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  person_id: { type: DataTypes.INTEGER, references: { model: Person, key: "id" }, allowNull: false },
  status: { type: DataTypes.ENUM("Married", "Divorced"), allowNull: false },
});

Partner.belongsTo(Person, { foreignKey: "person_id" });

module.exports = Partner;
