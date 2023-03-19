

p = {
    parentName: "I am a prototype",
    method() {}
}

d= Object.create(p)

c= Object.create(p, { parentName: {
    configurable: true, enumerable: true, writable: true, 
    value: "asdjflkalk"
}})

console.log(d.parentName === p.parentName)
console.log(c.parentName === p.parentName)