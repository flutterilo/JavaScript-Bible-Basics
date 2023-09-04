let x = 10;
const y = true;
let myObject = {
  a: x,
  b: y,
};
console.log(myObject);

x = 20;

let anotherObject;

anotherObject = {
  newA: x,
  b: y,
  c: myObject,
};

console.log(anotherObject);
