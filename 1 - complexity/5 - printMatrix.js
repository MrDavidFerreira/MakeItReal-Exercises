/**
 * 
 * Recorrer cada fila de la matriz
 *      Crear una cadena anexando el separador |
 *      Cuando termine cada fila anexar el salto de línea \n
 * 
 */

function printMatrix(matrix) {
    let string = "";

    for (fila of matrix) {
        string += fila.join(" | ");
        string += "\n"
    }

    return string;
}


console.log(printMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));

console.log(printMatrix([[1, 2, 3], [4, 50, 6], [71, 8, 9]]));

// O(n) - Lineal

/**
 * Consider the correct padding
 * @param {Array} matrix 
 */
function printMatrix2(matrix) {
    let result = [];
    const size = matrix[0].length;
    let max = 0;

    for (fila of matrix) {
        for (n of fila) {
            if(n > max) max = n;
            result.push(String(n));
        }
    }

    max = String(max);

    let cadena = ""

    for (i = 0; i < result.length; i++) {
        cadena += " ".repeat(max.length - result[i].length) + result[i];
        if ((i + 1) % size ) {
            cadena += " | ";
        } else {
            cadena += "\n";
        }
    }

    return cadena;
}


console.log(printMatrix2([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
//  1 | 2 | 3
//  4 | 5 | 6
//  7 | 8 | 9

console.log(printMatrix2([[1, 2, 3], [4, 50, 6], [71, 8, 9]]));
//   1 |  2 |  3
//   4 | 50 |  6
//  71 |  8 |  9


// O(n^2) - Exponencial