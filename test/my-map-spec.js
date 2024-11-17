// Your code here

const chai = require('chai');
const spies = require('chai-spies');
const expect = chai.expect;
chai.use(spies);

const myMap = require("../problems/my-map.js");


describe("myMap(inputArray, callback)", function () {

	let array;
	let callback;

	beforeEach(() =>  {

		array = [1,2,3]
		callback = (el) => el * 2;

	});

	it("should map the callback function to each element in inputArray", function () {
		expect(myMap(array, callback)).to.deep.equal([2,4,6]);
	});

	it("should not mutate original array", function() {
		let oldArray = array;
		const callBackResult = myMap(array,callback);
		expect(array).to.equal(oldArray);
	});

	it("should not use the built in Array.map()", function () {
		const functionSpy = chai.spy.on(array, 'map');
		expect(functionSpy).to.not.be.called;
	});
	
	it("should invoke the callback for each element in input array", function () {
		const spy = chai.spy(callback);
		myMap(array, spy);
		expect(spy).to.be.called.exactly(array.length);
	});

});
