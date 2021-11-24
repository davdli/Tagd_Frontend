const db = require("../db");
const User = require("./models/User");
const Location = require("./models/Location");
const Tag = require("./models/Tag");

// ASSOCIATIONS (See Schema)
// Revisit; discuss associations maybe ask Sarah/Joe
User.hasMany(Tag)
Tag.belongsTo(User)

User.hasMany(Location)
Location.belongsTo(User)

Location.hasMany(Tag)
Tag.belongsTo(Location)

module.exports = {
  db,
  models: { User, Location, Tag },
};

