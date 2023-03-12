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


function Base() {
}
Base.baseStaticVar = 'base static var'

Base.prototype.baseInstanceVar = 'base instance var'

function Derived() {

}

// set instance properties
console.log(Derived.prototype) // {}
Object.setPrototypeOf(Derived.prototype, Base.prototype)
console.log(Derived.prototype) // Base {}

// set static properties
Object.setPrototypeOf(Derived, Base)

// both used together are equivalent as => class Derived extends Base {}

// print instance var
console.log(new Base().baseInstanceVar)
console.log(new Derived().baseInstanceVar)

// print static var
console.log(Base.baseStaticVar)
console.log(Derived.baseStaticVar)