var assert = require('assert');

describe('My test test', function() {
	describe('Test #1', function(){
		it('Will return -1 when the value is not present', function(){
			assert.equal(-1, [1,2,3].indexOf(4));
		});
	});

	describe('Test #2', function(){
		it('Will return -1 when the value is not present', function(){
			assert.equal(-1, [1,2,3].indexOf(1));
		});
	});
});
