var mongoose = require( 'mongoose' );
var DB_URL = process.env.DB_URL || 'mongodb://mykola_test:mykola_test@chessmean-shard-00-00.qcbno.mongodb.net:27017,chessmean-shard-00-01.qcbno.mongodb.net:27017,chessmean-shard-00-02.qcbno.mongodb.net:27017/chessMEAN?ssl=true&replicaSet=atlas-vzysrs-shard-0&authSource=admin&retryWrites=true&w=majority';
mongoose.connect(DB_URL,{useMongoClient:true});

mongoose.connection.on('connected', function () { 
 console.log('Mongoose connected to ' + DB_URL); 
}); 

mongoose.connection.on('error', function (err) { 
 console.log('Mongoose connection error: ' + err); 
}); 

mongoose.connection.on('disconnected', function () { 
 console.log('Mongoose disconnected'); 
});

var user = require('./models/users');
var game = require('./models/games');

exports.user = user; 
exports.game = game;