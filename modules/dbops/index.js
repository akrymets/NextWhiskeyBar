var assert = require('assert');
var ObjectID = require('mongodb').ObjectID;

// Read all documents from a collection
var findDocuments = function (db, collection, callback){
    db.collection(collection).find({}).toArray(function(err, docs){
        assert.equal(err, null);
        console.log('Documents were read from db');
        callback(docs);
    });
    
};

// Read a single document from a collection
var findDocument = function (db, collection, doc_id, callback){
    db.collection(collection).findOne({"_id": ObjectID(doc_id)}, function(err, doc){
        assert.equal(err, null);
        console.log('Place with name ' + doc["name"] + ' was found in db');
        callback(doc);
    });
};

// Add document to db
var insertDocument = function (db, collection, document, callback) {
    db.collection(collection).insert(document, function(err, result){
        assert.equal(err, null);
        console.log("Successfuly saved to db");
        callback();
    });
};


exports.findDocuments = findDocuments;
exports.findDocument = findDocument;
exports.insertDocument = insertDocument;
// exports.insertDocumentTest = insertDocumentTest;