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
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEMpty: true,
      isUrl: true
    }
  },
  position: {
    type: Sequelize.ARRAY,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }
})

module.exports = Tag;
