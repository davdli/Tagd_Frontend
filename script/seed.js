'use strict'

const db = require('../server/db/db')
const {models: {User, Location, Tag}} = require('../server/db')

const usersData = [
  {
    type: 'Host',
    firstName: 'Tai',
    lastName: 'Stack',
    email: 'tai@email.com',
    password: '123'
  },
  {
    type: 'Host',
    firstName: 'David',
    lastName: 'Stack',
    email: 'david@email.com',
    password: 'abc'
  },
  {
    type: 'Guest',
    firstName: 'Greg',
    lastName: 'Stack',
    email: 'greg@email.com',
    password: '123'
  },
  {
    type: 'Guest',
    firstName: 'Tony',
    lastName: 'Stack',
    email: 'tony@email.com',
    password: '123'
  }
]

const tagsData = [
  {
    title: 'Masks',
    description: 'COVID19 Masks',
    userId: 1,
    imageUrl: "https://drive.google.com/file/d/1bK7kW1Je_9UhxsfiUG4tHI13olbNdR4v/view?usp=sharing",
  },
  {
    title: 'Logo',
    description: 'logo',
    userId: 2,
    imageUrl: "https://drive.google.com/file/d/1JHCvDopJTBzooddciU0x-qnwZOSfW9-5/view?usp=sharing",
  },
  {
    title: 'Cup',
    description: 'cup',
    userId: 3,
    imageUrl: "https://drive.google.com/file/d/1A2JU7pjUoFsWIujiwboH1rnWONtNEiWk/view?usp=sharing",
  },
  {
    title: 'Hat',
    description: 'hat',
    userId: 4,
    imageUrl: "https://drive.google.com/file/d/1t7Zo43k713bzljTT5gKPBQGCJp671w9-/view?usp=sharing",
  },
]

const locationsData = [
  {
    name: 'TaiHome',
    address: 'VA',
    userId: 1,
    tagId: 1
  },
  {
    name: 'DavidHome',
    address: 'NY',
    userId: 2,
    tagId: 2
  },
  {
    name: 'GregHome',
    address: 'NJ',
    userId: 3,
    tagId: 3
  },
  {
    name: 'TonyHome',
    address: 'PA',
    userId: 4,
    tagId: 4
  }
]

async function seed() {
  await db.sync({force: true});
  console.log('db synced!');

  const users = await Promise.all(
    usersData.map(user => {
      return User.create(user)
    })
  );

  const tags = await Promise.all(
    tagsData.map(tag => {
      return Tag.create(tag)
    })
  );

  const locations = await Promise.all(
    locationsData.map(location => {
      return Location.create(location)
    })
  );

  return {
    users,
    tags,
    locations
  }
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close();
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
