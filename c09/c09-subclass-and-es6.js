class EZArray extends Array {
  get first() {
    return this[0];
  }
  get last() {
    return this[this.length - 1];
  }
}

// EZArray inherits instance methods because EZArray.prototype
// inherits from Array.prototype
console.log(Array.prototype.isPrototypeOf(EZArray.prototype)); // => true
// And EZArray inherits static methods and properties because
// EZArray inherits from Array. This is a special feature of the
// extends keyword and is not possible before ES6.
console.log(Array.isPrototypeOf(EZArray)); // => true
console.log(Array.isPrototypeOf(EZArray.prototype)); // => false
console.log(Array === EZArray.prototype); // => false
