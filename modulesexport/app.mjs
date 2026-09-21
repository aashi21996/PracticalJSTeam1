// Curly braces { } ke andar exact class name likhna hota hai
import { Circle, Square } from './shapes.mjs';
const c1 = new Circle(5);
console.log(c1.getArea()); // Output: 78.53...
const s1 = new Square(4);
console.log(s1.getArea()); // Output: 16