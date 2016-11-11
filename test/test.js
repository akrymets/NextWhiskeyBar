var assert = require('assert');
var dbops = require('../modules/dbops');
var mongoClient = require('mongodb').MongoClient;

describe('My test test', function() {
	describe('Test #1', function(){
		it('Will return -1 when the value is not present', function(){
			assert.equal(-1, [1,2,3].indexOf(4));
		});
	});
});
