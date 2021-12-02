const db = require("../db");
const User = require("./models/User");
const Location = require("./models/Location");
const Tag = require("./models/Tag");
const Host = require("./models/Host");

// ASSOCIATIONS (See Schema)
// Revisit; discuss associations maybe ask Sarah/Joe
User.hasOne(Location, { through: 'user_location' })  // 0-1
Tag.belongsTo(Location, { through: 'location_tag' }) // 1-1
Location.belongsToMany(Tag, { through: 'location_tag' }) // 1-n

Host.belongsToMany(Location, { through: 'host_location' })  // 1-n
Location.hasOne(Host, { through: 'host_location' }) // 1-1

Host.belongsToMany(Tag, { through: 'host_tags' })
Tag.hasOne(Host, { through: 'host_tags' })


module.exports = {
  db,
  models: { User, Location, Tag, Host },
};

