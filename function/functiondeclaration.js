//Traditional named functions statement. JavaScript hoists function declarations entirely, meaning they can be called before they appear in the source code.
function aashi(age)
{
    return "aashi" + age;
}
console.log(aashi(30));

//Functions created inside an expression and assigned to a variable. They are created when the execution reaches them.
const add = function (a,b,c)
{
    return a+b+c;
};
console.log(add(1,2,3));

//Concise syntax for functions introduced in ES6. Arrow functions do not have their own this, arguments, or super bindings.
const multiply  = (a,b) =>
{
    return a*b;
}
console.log(multiply(2,3));

//Functions stored inside object literals or classes can use shorthand method syntax.
const calculator = {
  factor: 2,
  multiply(number) {
    return number * this.factor;
  }
};
console.log(calculator.multiply(5));