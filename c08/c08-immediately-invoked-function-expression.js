let uniqueInteger = function () {
  let counter = 0;
  return function () {
    return counter++;
  };
};

// need to call this first to get the desired closure
func1 = uniqueInteger();

// imeediately invoked function expression does not
// need to have that extra invokation statement.
anotherUniqueInteger = (function () {
  let counter = 0;
  return function () {
    return counter++;
  };
})();
