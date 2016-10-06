var assert = require('assert');
//var fmtout = require('./fmtout');

var findDocuments = function (db, collection, callback){
    var coll = db.collection(collection);
    
    coll.find({}).toArray(function(err, docs){
        assert.equal(err, null);
        console.log('Documents are read from db');
        callback(docs);
    });
    
};

var insertDocument = function (db, collection, document, callback) {
    var coll = db.collection(collection);
    
    coll.insert(document, function(result){
        console.log(result);
    });
};


exports.findDocuments = findDocuments;
exports.insertDocument = insertDocument;



