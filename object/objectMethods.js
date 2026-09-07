//Methods are actions that can be performed on objects.
//Methods are functions stored as property values.

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};
console.log(person.fullName());

//Accessing Object Methods
//To call an object method, add parentheses ():
//Without parentheses you get the function itself.
//Syntax objectName.methodName()


const persons = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};
console.log(persons.fullName);

//Adding a Method to an Object
//You can add a method to an object by assigning a function to a property:

const person1 = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
};
// Add a Method
person1.name = function() {
  return this.firstName + " " + this.lastName;
};
console.log("My father is " + person1.name()); 