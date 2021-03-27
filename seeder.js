const {User} = require('./models/User.js')
const {Post} = require('./models/Post.js')
const {Comment} = require('./models/Comment.js')
require('./models')

// adding seed data
const seed = async () => {
    try {
        // adding users
        // const user1 = new User({ 
        //     username: 'user1',
        //     imageFile: '',
        //     email: 'user1@user.com',
        //     password: 'pw1',
        //     user_image: 'image'

        // });
        // const user2 = new User({ 
        //     username: 'user2',
        //     imageFile: '',
        //     email: 'user2@user.com',
        //     password: 'pw2',
        //     user_image: 'image'

        // });
        // const user3 = new User({ 
        //     username: 'user3',
        //     imageFile: '',
        //     email: 'user3@user.com',
        //     password: 'pw3',
        //     user_image: 'image'
         // });
        const user4 = new User({ 
            username: 'user4',
            imageFile: '',
            email: 'user4@user.com',
            password: 'pw4',
            user_image: 'image'

        

        });

        await user4.save()
        // await user1.save()
        // await user2.save()
        // await user3.save()

        // // adding posts to users
        // const post1 = new Post({
        //     user: user1._id,
        //     title: 'Why Did Jack Ma Dissapear?',
        //     post_content: 'https://www.bbc.com/news/technology-56448688',
        //     post_upvote: 0,
        //     comments: []
        // })
        // const post2 = new Post({
        //     user: user2._id,
        //     title: 'Richard Stallman is back baby!',
        //     post_content: 'https://www.bbc.com/news/technology-56448688',
        //     post_upvote: 1,
        //     comments: []
        // })
        // const post3 = new Post({
        //     user: user3._id,
        //     title: 'Unpopular Opinion',
        //     post_content: 'youre not a programmer, stackeroverflow is',
        //     post_upvote: 4,
        //     comments: []
        // })
        const post4 = new Post({
            user: user4._id,
            title: 'HtMl is a complex language',
            post_content: 'i like html html html',
            post_upvote: 4,
            comments: []
        })
            

        // post1.user = user1
        // await post1.save()
        // post2.user = user2
        // await post2.save()
        // post3.user = user3
        // await post3.save()
        post4.user = user4
        await post4.save()
     


        // const comment1 = new Comment({
        //     content: 'jack ma is my best friend',
        //     comment_upvote: 1,
        // })

        // const comment2 = new Comment({
        //     content: 'richard stallman is good at eating toe jam',
        //     comment_upvote: 2,
        // })

        // const comment3 = new Comment({
        //     content: 'stackoverflow people are the kindest and most supportive people to noobs',
        //     comment_upvote: 3,
        // })




        // comment1.user = user1
        // await comment1.save()

        // post1.comments.push(comment1)
        // await post1.save()

       
        process.exit(0)
        

        


    } catch(error) {
        console.log(error)
    }

}

seed()








