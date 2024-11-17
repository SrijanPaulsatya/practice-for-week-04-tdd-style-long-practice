// Your code here

const { expect } = require('chai');

const reverseString = require('../problems/reverse-string.js');


describe('Reverse String', function () {

	it('should reverse the given string', function () {

		let string = "fun";
		let reversed = reverseString(string);
		expect(reversed).to.equal("nuf");
	});

	it('should throw an error if input is not a string', function () {
		expect(() => reverseString(3)).to.throw();
	});

});
