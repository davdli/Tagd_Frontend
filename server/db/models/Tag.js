const Sequelize = require("sequelize");
const db = require("../db");

const Tag = db.define("tag", {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  description: {
    type: Sequelize.TEXT,
  },
  imageUrl: {
    type: Sequelize.STRING || Sequelize.BLOB,
  },
})

module.exports = Tag;
