

obj = {x: 1, y: 2}

// spread ops for objects 
// are new features in ES 2018
my_new_obj = {z: 3, ...obj}

console.log(my_new_obj) // prints { z: 3, x: 1, y: 2 }