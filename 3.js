/**
 * Recorrer cada elemento del arreglo (i)
 *      Recorrer cada elemento del arreglo a excepción del anterior (j)
 *          Recorrer cada elemento del arreglo a excepción de los dos anteriores (k)
 * 
 * Si al sumar i +j + k da igual a cero
 *      Añadir al arreglo de resultados
 * 
 * O(n^3) - Exponencial
 */

function threeZeroSum(array) {
    let a;
    let b;
    let c;

    let results = [];



    for (i = 0; i < array.length; i++) {
        if (array[i] == null) continue;

        a = array[i];

        for (j = 0; j < array.length; j++) {
            if (array[j] == null || j == i) continue;

            b = array[j];

            for (k = 0; k < array.length; k++) {
                if (array[k] == null || k == i || k == j) continue;

                c = array[k]

                if ((a + b + c) == 0) {
                    // results.push(a + " " + b + " " + c);
                    results.push(Array.of(a, b, c));
                    // descomentar lo siguiente si no se quiere que se reutilizen los números
                    // array[i] = null;  
                    // array[j] = null; 
                    // array[k] = null;
                }

            }
        }
    }

    return results;
}

console.log(threeZeroSum([-5, -1, -4, 2, 9, -9, -6, -1, -7]));
// ["-5 -4, 9", "-1 -1 2"]

console.log(threeZeroSum([-1, -6, -3, -7, 5, -8, 2, -8, 1]));
// ["-7 2 5", "-6 1 5", "-3 1 2"]


function threeZeroSum2(array) {
    let a;
    let b;
    let c;

    let results = [];


    for (i = 0; i < array.length; i++) {

        a = array[i];

        for (j = 0; j < array.length; j++) {

            if (j == i) continue;

            b = array[j];

            for (k = 0; k < array.length; k++) {

                if (k == i || k == j) continue;

                c = array[k];

                if ((a + b + c) == 0) {
                    let disponible = true;
                    for (result of results) {
                        resultCopy = result.slice(); //array copy

                        if (resultCopy.indexOf(a) != -1)
                            resultCopy.splice(resultCopy.indexOf(a), 1);
                        if (resultCopy.indexOf(b) != -1)
                            resultCopy.splice(resultCopy.indexOf(b), 1);
                        if (resultCopy.indexOf(c) != -1)
                            resultCopy.splice(resultCopy.indexOf(c), 1);

                        if (resultCopy.length == 0) {
                            disponible = false;
                            break;
                        }
                    }
                    if (disponible) {
                        results.push(Array.of(a, b, c));
                        console.log(`pushed = ${Array.of(a, b, c)}`);
                    }
                }
            }
        }
    }

    for(i = 0; i < results.length; i++) {
        results[i] = results[i].join(" ");
    }

    return results;
}

console.log(threeZeroSum2([-5, -1, -4, 2, 9, -9, -6, -1, -7]));
// ["-5 -4, 9", "-1 -1 2"]

console.log(threeZeroSum2([-1, -6, -3, -7, 5, -8, 2, -8, 1]));
// ["-7 2 5", "-6 1 5", "-3 1 2"]

