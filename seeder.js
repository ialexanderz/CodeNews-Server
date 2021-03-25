const User = require("./models/User")


const fakeUsers = [
	{
		email:  'java@javascript.com',
    password: 'javascript',
		user_image: 'https://unsplash.com/photos/2LowviVHZ-E'
		
	},
	{
		email:  'user1@user.com',
    password: 'pw1',
		user_image: 'https://unsplash.com/photos/2LowviVHZ-E'
	},
	{
		email:  'user2@user.com',
    password: 'pw2',
		user_image: 'https://unsplash.com/photos/2LowviVHZ-E'
	},
	{
		email:  'user3@user.com',
    password: 'pw3',
		user_image: 'https://unsplash.com/photos/2LowviVHZ-E'
	},  
	{
		email:  'user4@user.com',
    password: 'pw4',
		user_image: 'https://unsplash.com/photos/2LowviVHZ-E'
	}
]

// async function createSomePosts 

// find a user

const foundUser = await User.findOne({

})

