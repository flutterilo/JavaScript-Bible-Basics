function outerFunction(a, b) {
  function innerFunction(c) {
    return c * c;
  }
  const sum = a + b;
  const result = innerFunction(sum);
  console.log(result);
}
outerFunction(5, 2);
