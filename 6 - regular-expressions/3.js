// Write a regular expression to check if a string is a valid date:

const r = /[0-3]\d\/[0-1]\d\/\d{4}/

console.log(r.test("12/12/2012")); // true
console.log(r.test("24/08/1982")); // true
console.log(r.test("99/11/2019")); // false
console.log(r.test("hello")); // false