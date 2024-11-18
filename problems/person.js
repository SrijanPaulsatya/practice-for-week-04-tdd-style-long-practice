class Person {
  // Your code here

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    return `Hi There, I am ${this.name}`;
  }

  visit(otherPerson) {
    return `${this.name} visited ${otherPerson.name}`;
  }

  update(obj) {

    if (Object.prototype.toString.call(obj) !== '[object Object]') {
      throw new TypeError("Parameter must be an object");
    }
    else if ((('name' in obj) !== true) || (('age' in obj) !== true)) {
      throw new TypeError("Input object does not have name and age property");
    }
    else {
      this.name = obj.name;
      this.age = obj.age;
    }

  }

  tryUpdate(obj) {

    try {
      this.update(obj);
      return true;
    } catch(err) {
      return false;
    }

  }

  static greetAll(objects) {
    return objects.map(instance => instance.sayHello());
  }

}

module.exports = Person;
