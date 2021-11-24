const Sequelize = require("sequelize");
const db = require("../db");

const Location = db.define("location", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },

  address: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true,
    },
  },
})

module.exports = Location;
