// ****** properties *******
function f(...restArguements) {}
g = f;
console.log(f.length); // prints 0
console.log(f.name); // prints f
console.log(g.name); // prints f

// ****** methods *******
// arrow function will ignore the context parameter
// in `arrowf.call` or `arrowf.apply`

// context bind by `bind` method for functions (not
// arrow functions) will not be overriden.
// the `name` property will be changed for functions
// returned from bind.

// Function() constructor dynamically creates and
// compiles functions at runtime
