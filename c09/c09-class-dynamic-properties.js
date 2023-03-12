class MyObject {
  method() {
    return "This is a method!";
  }
}
myobj = new MyObject();

console.log(myobj.method()); // This is a method!
console.log(myobj?.anotherMethod); // undefined

MyObject.anotherMethod = function () {
  return "This is another method!!!";
};

console.log(MyObject.anotherMethod); //
console.log(myobj.method()); // This is a method!
console.log(myobj?.anotherMethod); // undefined

MyObject.prototype.dynamicMethod = function () {
  return "This is a dynamically added property!!!";
};

console.log(MyObject.prototype.method); // [Function: method]
console.log(MyObject.prototype.dynamicMethod); // [Function (anonymous)]
console.log(myobj.dynamicMethod()); // This is a dynamically added property!!!
