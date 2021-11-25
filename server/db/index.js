const db = require("../db");
const User = require("./models/User");
const Location = require("./models/Location");
const Tag = require("./models/Tag");

// ASSOCIATIONS (See Schema)
// Revisit; discuss associations maybe ask Sarah/Joe
User.belongsToMany(Tag, { through: Location })
Tag.belongsTo(User, { through: Location })


module.exports = {
  db,
  models: { User, Location, Tag },
};

