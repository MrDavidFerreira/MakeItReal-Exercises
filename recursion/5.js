/**
 * Write a function called pascal that receives a number
 * and returns a string with a Pascal triangle.
 */

/**
 * Caso trivial: Cuando n < 1 retorne ""
 * Caso general: Cuando n >= 1 retorne la linea que contenga los elementos de ese nivel del triángulo
 * Ir aum
 */

function pascal(n){
    let string = "";

    if (n < 1) {
        return string;
    } else {
        let row = n - 1;
        for (i = 0; i < n; i++) {
            let term = i;

            let x = factorial(row) / (factorial(term) * factorial(row - term));
            string += x + " ";
        }
        return pascal(n - 1) + string + "\n";
    }
}

function factorial(n) {
    if (n <= 1) {
        return 1;
    }

    return n * factorial(n - 1);
}

console.log(pascal(2));
// 1
// 1 1

console.log(pascal(5));
// 1
// 1 1
// 1 2 1
// 1 3 3 1
// 1 4 6 4 1