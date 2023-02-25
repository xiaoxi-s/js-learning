


let obj1 = {x: 1, y: 2}

a1 = [obj1]

a2 = [...a1]

// obj1.x = 8
a1[0].x = 8

console.log(a2[0].x)
