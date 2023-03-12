// yes!

function Base () {
}

Base.prototype.value = 1

Base.prototype.printVal = function () {
    console.log(this.value)
}

function Derived() {
}

Object.setPrototypeOf(Derived.prototype, Base.prototype)

obj = new Derived()

obj.printVal() // prints 1
obj.val = 2
anotherObj = new Derived()
anotherObj.printVal() // prints 1