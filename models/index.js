// require mongoose package
const mongoose = require('mongoose')

// mongoose config --> if you don't change NODE_ENV's value to something besides 'development' (something like 'banana') 
// then the program catches the if clause and runs on local host rather than the mongodb.net
if(process.env.NODE_ENV === 'development') {
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost/project-three'

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
})

const db = mongoose.connection;

// db methods for debug
db.once('open', () => {
console.log(`⛓ mongoDB connection @ ${db.host}:${db.port}`)
})

db.on('error', err => {
console.error(`🔥 something has gone wrong with the DB!!!!\n ${err}`)
})
} else{
  // mongoDB Atlas code will go here
  // username: super_cool_person
  // pw: hello
  const MongoClient = require('mongodb').MongoClient;

  const uri = "mongodb+srv://super_cool_person:hello@cluster0.hzc1d.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
  // "mongodb+srv://super_cool_person:hello@cluster0.hzc1d.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";


  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  })

  const db = mongoose.connection;

  // db methods for debug
  db.once('open', () => {
    console.log(`⛓ mongoDB connection @ ${db.host}:${db.port}`)
  })

  db.on('error', err => {
    console.error(`🔥 something has gone wrong with the DB!!!!\n ${err}`)
  })
}
