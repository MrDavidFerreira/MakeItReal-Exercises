// Write a regular expression to check if a string is a valid car plate:

const r = /[A-Z]{3}\d{3}/

console.log(r.test("hello")); // false
console.log(r.test("MVV387")); // true
console.log(r.test("mvv387")); // false