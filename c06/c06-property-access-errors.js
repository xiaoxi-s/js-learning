
surname = 'this is a surname'
author = {surname: surname}
book = {author: author}

console.log(book.author.surname)
console.log(book && book.author && book.author.surname)


console.log(book.hi != null)

// test whether book has property hi
console.log(book.hi !== undefined)