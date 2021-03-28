const {User} = require('./models/User.js')
const {Post} = require('./models/Post.js')
const {Comment} = require('./models/Comment.js')
require('./models')

// adding seed data
const seed = async () => {
    try {
        // USERS
        const user1 = new User({ 
            username: 'Jill Ma',
            imageFile: '',
            email: 'user1@user.com',
            password: 'pw1',
            user_image: 'https://unsplash.com/photos/StV6G2GURA8'
        });
        await user1.save()


        const user2 = new User({ 
            username: 'Richard Stallman',
            imageFile: '',
            email: 'user2@user.com',
            password: 'pw2',
            user_image: 'https://steemitimages.com/640x0/https://s8.postimg.cc/3w2xzgyt1/richard-stallman-825x510.jpg'
        });
        await user2.save()


        const user3 = new User({ 
            username: 'Joe Rogan',
            imageFile: '',
            email: 'user3@user.com',
            password: 'pw3',
            user_image: 'image'
         });
         await user3.save()


        const user4 = new User({ 
            username: 'Nim Chimpsky',
            imageFile: '',
            email: 'user4@user.com',
            password: 'pw4',
            user_image: 'image'
        });
        await user4.save()


        const user5 = new User({
            username: '2cool4school',
            imageFile: '',
            email: 'user5@user.com',
            password: 'pw5',
            user_image: 'image'

        })
        await user5.save()

    


        // POSTS
        const post1 = new Post({
            user: user1._id,
            title: 'Why Did Jack Ma Dissapear?',
            post_content: 'https://www.bbc.com/news/technology-56448688',
            post_upvote: 0,
            comments: []
        })
        post1.user = user1
        await post1.save()


        const post2 = new Post({
            user: user2._id,
            title: 'Richard Stallman is back baby!',
            post_content: 'https://www.bbc.com/news/technology-56448688',
            post_upvote: 1,
            comments: []
        })
        post2.user = user2
        await post2.save()
        

        const post3 = new Post({
            user: user3._id,
            title: 'Unpopular Opinion',
            post_content: 'youre not a programmer, stackeroverflow is',
            post_upvote: 4,
            comments: []
        })
        post3.user = user3
        await post3.save()


        const post4 = new Post({
            user: user4._id,
            title: 'I created an AI using html',
            post_content: 'it is a hyper-text machine language entity and has reached divine consciousness',
            post_upvote: 4,
            comments: []
        })
        post4.user = user4
        await post4.save()


        const post5 = new Post({
            user: user2._id,
            title: 'Beware Rokos Basilisk',
            post_content: 'im scared!',
            post_upvote: 2,
            comments: []
        })
        post5.user = user2
        await post5.save()

      
            

        // COMMENTS
        const comment1 = new Comment({
            content: 'jack ma is my best friend',
            comment_upvote: 1,
        })
        comment1.user = user1
        await comment1.save()
        post1.comments.push(comment1)
        await post1.save()
        

        const comment2 = new Comment({
            content: 'i wonder why he disappeared? a glitch in the matrix?',
            comment_upvote: 3,
        })
        comment2.user = user2
        await comment2.save()
        post1.comments.push(comment2)
        await post1.save()


        const comment3 = new Comment({
            content: 'One time I had a glitch in reality while taking DMT on an elk hunting trip. Glitches are extreeemely problematic',
            comment_upvote: 5,
        })
        comment3.user = user3
        await comment3.save()
        post1.comments.push(comment3)
        await post1.save()


        const comment4 = new Comment({
            content: 'hold on guys, I have something in my toes I need to pick at. Im hungry...',
            comment_upvote: 0
        })
        comment4.user = user2
        await comment4.save()
        post1.comments.push(comment4)
        await post1.save()



        const comment5 = new Comment({
            content: '.....Richard makes me really uncomfortable...',
            comment_upvote: 100
        })
        comment5.user = user1
        await comment5.save()
        post1.comments.push(comment5)
        await post1.save()


        const comment6 = new Comment({
            content: 'since when did monkeys start writing code?',
            comment_upvote: 314159265
        })
        comment6.user = user3
        await comment6.save()
        post4.comments.push(comment6)
        await post4.save()


        const comment7 = new Comment({
            content: 'im only half monkey. Noam Chomsky is my dad.',
            comment_upvote: 27
        })
        comment7.user = user4
        await comment7.save()
        post4.comments.push(comment7)
        await post4.save()


        const comment8 = new Comment({
            content: 'cool story, richard.',
            comment_upvote: 0
        })
        comment8.user = user5
        await comment8.save()
        post2.comments.push(comment8)
        await post2.save()

        process.exit(0)

        } catch(error) {
            console.log(error)
        }
    }
    
seed()
        

        








