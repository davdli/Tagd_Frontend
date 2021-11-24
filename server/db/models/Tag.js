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
  latitude: {
    type: Sequelize.DECIMAL(10, 6)
  },
  longitude: {
    type: Sequelize.DECIMAL(10, 6)
  },
  imageUrl: {
    type: Sequelize.STRING
  }
})

module.exports = Tag;
