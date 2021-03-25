// require mongoose
const mongoose = require("mongoose");

// create the schema
const UserSchema = new mongoose.Schema({
email: {
    type: String,
},
password: {
    type: String,
},
user_image: {
    // try using robohash for random placeholder image
    type: String,
    default: 'https://robohash.org/{}G.png?set=set5',
},
});

// export the model
// export the model
const User = mongoose.model("users", UserSchema);


module.exports = {User, UserSchema}