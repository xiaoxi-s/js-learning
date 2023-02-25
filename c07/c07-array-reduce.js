
a = [ 3, 4, 5]

val = a.reduce((x, y) => x - y)
val2 = a.reduceRight((y, x) => x - y)

console.log(val)
console.log(val2)