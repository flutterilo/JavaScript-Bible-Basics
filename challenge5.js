let objectWithNastedObject = {};

objectWithNastedObject.nastedObject = {};

objectWithNastedObject.nastedObject.a = null;
objectWithNastedObject.nastedObject["b"] = true;

console.log(objectWithNastedObject);
