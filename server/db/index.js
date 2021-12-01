const db = require("../db");
const User = require("./models/User");
const Location = require("./models/Location");
const Tag = require("./models/Tag");
const Host = require("./models/Host");

// ASSOCIATIONS (See Schema)
// Revisit; discuss associations maybe ask Sarah/Joe
User.hasOne(Location, { through: user_location })  // 0-1
Tag.belongsTo(Location, { through: location_tag }) // 1-1
Location.hasMany(Tag, { through: location_tag }) // 1-n

Host.hasMany(Location)  // 1-n
Location.hasOne(Host) // 1-1

Host.hasMany(Tag, { through: host_tags })
Tag.hasOne(Host, { through: host_tags })


module.exports = {
  db,
  models: { User, Location, Tag, Host },
};

