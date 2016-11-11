var assert = require('assert');
var dbops = require('../modules/dbops');
var mongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/nwb';

describe('My test test', function() {
	describe('Test #1', function(){
		it('Will return -1 when the value is not present', function(){
			assert.equal(-1, [1,2,3].indexOf(4));
		});
	});

	describe('Test #3', function(){
		it('Will return 0 when db is accessible', function(){
			mongoClient.connect(url, function(err, db){
				assert.equal(err, null);
				console.log('Test connection to MongoDB server is successful');
				dbops.findDocuments(db, 'places', function(docs){
					it('Will fail if query result is empty', function(){
						assert.equal(true, docs);
					});
				});
				db.close();
			});
		});
	});	

	// describe('Test #2', function(){
	// 	it('Will return -1 when the value is not present', function(){
	// 		assert.equal(-1, [1,2,3].indexOf(1));
	// 	});
	// });
});
