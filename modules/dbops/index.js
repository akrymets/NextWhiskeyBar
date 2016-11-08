var assert = require('assert');

var findDocuments = function (db, collection, callback){
    db.collection(collection).find({}).toArray(function(err, docs){
        assert.equal(err, null);
        console.log('Read from db');
        callback(docs);
    });
    
};

var insertDocument = function (db, collection, document, callback) {
    db.collection(collection).insert(document, function(err, result){
        assert.equal(err, null);
        console.log("Successfuly saved to db");
        callback();
    });
};


// var insertDocumentTest = function (db, callback) {
//     var doc = {"name": "test"};
//     db.collection("places").insert(doc, function(err, result){
//         assert.equal(err, null);
//         console.log("Successfuly saved to db - test");
//         callback(result);
//     });
// };

exports.findDocuments = findDocuments;
exports.insertDocument = insertDocument;
// exports.insertDocumentTest = insertDocumentTest;



