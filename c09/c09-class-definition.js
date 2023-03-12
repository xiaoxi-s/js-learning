function AnotherObj(state) {
  this.state = state;
}

AnotherObj.prototype = {
  constructor: AnotherObj,
  method: function () {
    return "I have state: " + this.state;
  },
  toString: function () {
    return "this obj has state: " + this.state;
  },
};

console.log(AnotherObj); // [Function: AnotherObj]
// a deprecated accessor statement:
// console.log(AnotherObj.__proto__); // {}
console.log(AnotherObj.AnotherObj); // undefined
console.log(AnotherObj.prototype); // prints the following:
// {
//   constructor: [Function: AnotherObj],
//   method: [Function: method],
//   toString: [Function: toString]
// }
console.log(AnotherObj.prototype.prototype); // undefined
console.log(AnotherObj.constructor); // [Function: Function]

console.log(AnotherObj.prototype.toString()); // this obj has state: undefined

// note: the constructor field will not be automatically set
console.log(AnotherObj.prototype.constructor); // [Function: AnotherObj]
console.log(AnotherObj.prototype.constructor === AnotherObj); // true

console.log(new AnotherObj("hi").prototype); // undefined
console.log(new AnotherObj("hi").constructor); // [Function: AnotherObj]

class MyObject {
  constructor(state) {
    this.state = state;
  }
  method1() {
    return "I have state: " + this.state;
  }
  method2() {
    return "This is method2";
  }
  toString() {
    return "this obj has state: " + this.state;
  }
}

console.log(MyObject); // [class MyObject]
console.log(MyObject.MyObject); // undefined
console.log(MyObject.prototype); // {}
console.log(MyObject.prototype == Object); // false
console.log(MyObject.prototype.method1); // [Function: method1]
console.log(MyObject.prototype.method2); // [Function: method2]
console.log(MyObject.prototype.toString); // [Function: toString]
console.log(MyObject.constructor); // [Function: Function]

console.log(MyObject.prototype.toString()); // this obj has state: undefined
console.log(MyObject.prototype.constructor); // [class MyObject]
console.log(MyObject.prototype.constructor === MyObject); // true

console.log(new Object());
console.log(Object);
