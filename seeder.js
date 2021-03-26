const {User} = require('./models/User.js')
const {Post} = require('./models/Post.js')
const {Comment} = require('./models/Comment.js')
require('./models')

const seed = async () => {
    try {
        const user1 = new User({ 
            username: 'user1',
            imageFile: '',
            email: 'user1@user.com',
            password: 'pw1',
            user_image: 'image'

        });
        const user2 = new User({ 
            username: 'user2',
            imageFile: '',
            email: 'user2@user.com',
            password: 'pw2',
            user_image: 'image'

        });
        const user3 = new User({ 
            username: 'user3',
            imageFile: '',
            email: 'user3@user.com',
            password: 'pw3',
            user_image: 'image'

        });

        await user1.save()
        await user2.save()
        await user3.save()

        // console.log(user1)

        const post1 = new Post({
            user: user1._id,
            title: 'Why Did Jack Ma Dissapear?',
            post_content: 'https://www.bbc.com/news/technology-56448688',
            post_upvote: 0,
            comments: []
        })
        const post2 = new Post({
            user: user2._id,
            title: 'Why Did Jack Ma Dissapear?',
            post_content: 'https://www.bbc.com/news/technology-56448688',
            post_upvote: 0,
            comments: []
        })
            

        post1.user = user1
        await post1.save()
       


        const comment1 = new Comment({
            content: 'i disagree!',
            comment_upvote: 1,
        })

        






        comment1.user = user1
        await comment1.save()

        post1.comments.push(comment1)
        await post1.save()

       
        process.exit(0)
        

        


    } catch(error) {
        console.log(error)
    }

}

seed()








