require('./models')
const { Post, Comment } = require('./models/Post')

async function createPost() {
const NewPost =  new Post({ 
    title: 'General Assembly ',
    post_content: 'project three question!'
})
const comment = new Comment({
    content: 'OMG working on it',

})
NewPost.comments = [comment]
await NewPost.save() 
console.log(NewPost)


}
createPost()

