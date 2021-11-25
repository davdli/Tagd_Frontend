'use strict'

const db = require('../server/db/db')
const {models: {User, Location, Tag}} = require('../server/db')

const users = [
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

const tags = [
  {
    title: 'Doorway',
    description: 'Home entrance',
  },
  {
    title: 'Kitchen',
    description: 'Kitchen',
  },
  {
    title: 'Bedroom',
    description: 'Bedroom',
  }
]

// const locations = [
//   {
//     name: 'TaiHome',
//     address: 'VA',
//   },
//   {
//     name: 'DavidHome',
//     address: 'NY',
//   },
//   {
//     name: 'GregHome',
//     address: 'NJ',
//   },
//   {
//     name: 'TonyHome',
//     address: 'PA',
//   }
// ]

async function seed() {
  await db.sync({force: true});
  console.log('db synced!');

  await Promise.all(
    users.map(user => {
      return User.create(user)
    })
  );

  await Promise.all(
    tags.map(tag => {
      return Tag.create(tag)
    })
  );

  // await Promise.all(
  //   locations.map(location => {
  //     return Location.create(location)
  //   })
  // );
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
