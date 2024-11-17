// Your code here

const chai = require('chai');
const expect = chai.expect;

const { returnsThree, reciprocal } = require('../problems/number-fun.js');


describe("Returns Three", function () {

	it('should return true if number is 3', function () {
		expect(returnsThree()).to.equal(3);
	});

});

describe("Reciprocal", function () {
	
	it('should return the reciprocal of the number', function () {
		let n = 4;
		expect(reciprocal(n)).to.equal(0.25);
	});

	it('should return the reciprocal of the number (if it\'s a fraction)', function () {
		expect(reciprocal(0.25)).to.equal(4);
	});

	it('should throw an error if input less than 0 or greater than 1000000', function () {
		expect(() => reciprocal(0)).to.throw();
	});

	it('should throw an error if input less than 0 or greater than 1000000', function () {
		expect(() => reciprocal(100000000)).to.throw();
	});

});

