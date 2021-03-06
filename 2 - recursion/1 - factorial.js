// Write a function called factorial that receives a number and returns the factorial of the number.
// The factorial is the multiplication of every positive number up to the
//number. For example, the factorial of 5 is 120 because 5 * 4 * 3 * 2 * 1 = 120.

/**
 * 1. Caso trivial: n == 1
 * 2. Caso general: n > 1
 * 3. n - 1
 */

function factorial(n) {
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(factorial(4)); // 24
console.log(factorial(5)); // 120
console.log(factorial(6)); // 720
console.log(factorial(9)); // 362880