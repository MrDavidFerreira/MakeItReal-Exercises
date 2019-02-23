// Write a regular expression to check if a string is a valid hex color:

const r = /#([A-Fa-f\d]{3}){1,2}$/

console.log(r.test("#abc")); // true
console.log(r.test("#f00")); // true
console.log(r.test("#BADA55")); // true
console.log(r.test("#C0FFEE")); // true
console.log(r.test("#gac")); // false
console.log(r.test("#f005")); // false