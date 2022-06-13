const MongoClient = require('mongodb').MongoClient;
const url         = 'mongodb://localhost:27017';
let db            = null;

// connect to mongo 
MongoClient.connect(url, {useUnifiedTopology: true}, function(err, client) { 
    console.log("Connected 1");
    //connect to our myproject db
    db = client.db('myproject');
    //console.log(db);
});

//create user account 
function create(name, email, password){
    console.log("run 2");
    //we package it in a promise so its async 
    return new Promise((resolve, reject) => {
        const collection = db.collection('users');
        const doc = {name, email, password, balance: 0};
        //insert one doc and pass in the object we made above
        collection.insertOne(doc, {w:1}, function(err, result) {
            err ? reject(err) : resolve(doc);
        });
    })
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
    })
}
//this shit below is MAD VITAL BRO if you dont put this in it doesnt let index.js bool with our functions bruh
module.exports = {create, all};

//setTimeout(() => {create("liam","test@mit.edu","secret")}, 1000);