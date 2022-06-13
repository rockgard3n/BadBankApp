const MongoClient = require('mongodb').MongoClient;
const url         = 'mongodb://localhost:27017';
let db            = null;

// connect to mongo 
MongoClient.connect(url, {useUnifiedTopology: true}, function(err, client) { 
    console.log("Connected");
    //connect to our myproject db
    db = client.db('myproject');
});

//create user account 
function create(name, email, password){
    //we package it in a promise so its async 
    return new Promise((resolve, reject) => {
        const collection = db.collection('users');
        const doc = {name, email, password, balance: 0};
        //insert one doc and pass in the object we made above
        collection.insertOne(doc, {w:1}, function(err, result) {
            err ? reject(err) : resolve(doc);
        });
    });
}

//return all users
function all(){
    return new Promise((resolve, reject) => {
        const customers = db
            .collection('users')
            .find({})
            .toArray(function(err, docs) {
                err ? reject(err) : resolve(docs);
            });
    });
}