var assert = require('assert');

var findDocuments = function (db, collection, callback){
    var coll = db.collection(collection);
    
    coll.find({}).toArray(function(err, docs){
        assert.equal(err, null);
        console.log('Documents read from the db');
        callback(docs);
    });
    
};

var insertDocument = function (db, collection, document, callback) {
    var coll = db.collection(collection);
};











exports.findDocuments = findDocuments;



