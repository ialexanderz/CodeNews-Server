// db tests to run
// require models folder
// require('./models')
// // require the user model
// const User = require('./models/User.js')

// const userTest = async () => {
// try {
//     // CREATE a user
//     const newUser = new User({
//     email: 'sunnil262@gmail',
//     password: 'general'
//     })

//     await newUser.save()
//     console.log('newUser', newUser)


    

//     // READ a user
//     const foundUser =  await User.findOne({
//     email: newUser.email
//     })

//     console.log('foundUser', foundUser)

//     // UPDATE a user
//     foundUser.name = 'sunnil262@gmail'

//     await foundUser.save()

//     const findUserAgain = await User.findOne({
//     email: 'sunnil262@gmail'
//     })

//     console.log('findUserAgain', findUserAgain)

//     // DESTROY a user
//     const deleteUser = await User.deleteOne({
//       name: 'sunnil262@gmail'
//     })

//     console.log('deleteUser', deleteUser)

//     const userTest = async () => {
// try {
//     // CREATE a user
//     const newUser = new User({
//     email: 'sunnil262@gmail',
//     password: 'general'
//     })

//     await newUser.save()
//     console.log('newUser', newUser)

//     // READ a user
//     const foundUser =  await User.findOne({
//     email: newUser.email
//     })

//     console.log('foundUser', foundUser)

//     // UPDATE a user
//     foundUser.name = 'sunnil262@gmail'

//     await foundUser.save()

//     const findUserAgain = await User.findOne({
//     email: 'sunnil262@gmail'
//     })

//     console.log('findUserAgain', findUserAgain)

//     // DESTROY a user
//     const deleteUser = await User.deleteOne({
//       name: 'sunnil262@gmail'
//     })

//     console.log('deleteUser', deleteUser)




//     // we done
//     process.exit()
//   } catch (error) {
//     console.log(error)
//     process.exit()
//   }
// }

// userTest()

const {Post} = require('../models/Post.js')
const {PostSchema} = require('../models/Post.js')
console.log(Post)
console.log(PostSchema)