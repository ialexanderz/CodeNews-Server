const {User} = require('./models/User.js')
const {UserSchema} = require('./models/User.js')
const {Post} = require('./models/Post.js')
const {Comment} = require('./models/Comment.js')
require('./models')

const newUser = async () => {
    try {
        const newUser = new User({ 
            email: 'user1@user.com',
            password: 'pw1',
            user_image: 'image'

        })
        await newUser.save()
        // console.log(newUser)

        const newPost = new Post({
            url: 'https://www.bbc.com/news/technology-56448688',
            title: 'Why Did Jack Ma Dissapear?',
            post_content: '',
            post_upvote: ''

        })
        newPost.user = newUser
        await newPost.save()
        // console.log(newPost)

        const foundPost = await Post.findOne( {title: 'Why Did Jack Ma Dissapear?'} )
        console.log(foundPost)

        const foundUser = await User.findById(foundPost.user)
        console.log(foundUser)

        const newComment = new Comment({
            comment_content: 'i disagree!',
            comment_upvote: 1,
        })

        newComment.user = newUser
        await newComment.save()

        newPost.comments.push(newComment)
        await newPost.save()

        console.log(newPost)
        process.exit(0)
        

        


    } catch(error) {
        console.log(error)
    }

}









newUser()
