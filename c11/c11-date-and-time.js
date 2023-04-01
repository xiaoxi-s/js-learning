d = Date.UTC(2000, 0, 1, 08, 08, 08, 8); // returns milliseconds
console.log(d);

// print a date
date = new Date(d);
console.log(date);

console.log(date.getDate());

// print a timestamp
console.log(Date.now());
