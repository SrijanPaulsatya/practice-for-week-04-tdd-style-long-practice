// Your code here

const chai = require('chai');
const expect = chai.expect;

const Person = require("../problems/person.js");

describe("Person", function () {

	let person;

	beforeEach(() => {
		person = new Person("Luffy", 21);
		person1 = new Person("Rayleigh", 48);
	});

	it("should have name and age attribues", function () {
		expect(person.name).to.equal("Luffy");
		expect(person.age).to.equal(21);
	});

	context("person.sayHello()", function () {

		it("should return name and greeting message", function () {
			expect(person.sayHello()).to.equal(`Hi There, I am ${person.name}`);
		});

	});

	context("person.visit(otherPerson)", function () {

		it("should return a string stating that instance visited otherPerson", function () {
			expect(person.visit(person1)).to.equal(`${person.name} visited ${person1.name}`);
		});

	});

	context("person.switchVisit(otherPerson)", function () {
		
		it("should invoke the visit function for the parameter (otherPerson)", function () {
			let functionResult = person1.visit(person);
			expect(functionResult).to.equal(`${person1.name} visited ${person.name}`);

		});

	});

	context("person.update(obj)", function () {
		
		context("if passed in obj is not an object", function () {
			it("should throw an error", function () {

				let obj = [];
				expect(() => person.update(obj)).to.throw();
				
			});
		
		});

		context("if passed in obj is object", function () {

			let obj = {name: "lulu", age: 57};
			let obj1 = {};

			it("should throw an error if obj does not have name and age property", function () {
				expect(() => person.update(obj1)).to.throw();
			});

			it("should update the properties of person to match the parameter object's value", function () {

				person.update(obj);
				expect(person.name).to.equal("lulu");
				expect(person.age).to.equal(57);

			});


		});
	});

	context("tryUpdate(obj)", function () {
		
		context("if invocation of update is successful", function () {

			it("should return true", function () {
				let obj = {name: "lulu", age: 57};
				let updateStatus = person.tryUpdate(obj);
				expect(updateStatus).to.be.true;
				expect(person.name).to.equal(obj.name);
				expect(person.age).to.equal(obj.age);

			});

		});

		context("if invocation of update is not successful", function () {

			it("should return false", function () {
				let obj = {something: "what"};
				let updateStatus = person.tryUpdate(obj)
				expect(updateStatus).to.be.false;
			});

		});

	});


	context("greetAll(objects) Static Method", function () {

		it("should call sayHello() on input array of person instances and return array of string's", function () {
			let objects = [person, person1]
			let greetAllResult = Person.greetAll(objects)
			expect(Person.greetAll(objects)).to.deep.equal(greetAllResult);
		});

	});

});


