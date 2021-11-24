const Sequelize = require("sequelize");
const db = require("../db");

const SALT_ROUNDS = 5;

const Tag = db.define("tag", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  description: {
    type: Sequelize.TEXT,
  },
})

module.exports = Tag;
