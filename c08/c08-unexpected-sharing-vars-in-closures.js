function constfuncs() {
  let funcs = [];
  // because of var, `i` is shared across all closures in
  // the array funcs
  for (var i = 0; i < 10; ++i) funcs[i] = () => i;
  return funcs;
}
let funcs = constfuncs();

console.log(funcs[3]()); // so this will printout out 10 instead of 3

// use let to define i
function anotherfuncs() {
  let funcs = [];
  for (let i = 0; i < 10; ++i) funcs[i] = () => i;
  return funcs;
}

funcs = anotherfuncs();

console.log(funcs[3]()); // this will printout 3
// This is becuause ES6 defines block-scoped varaiables.
// `let` and `const` are block scoped. Each iteration of
// loop defines a scope that is independent of the scopes
// of all other iterations, and each of these scopes has
// its own independent binding of i.
