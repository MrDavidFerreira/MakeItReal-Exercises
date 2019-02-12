/**
 * 3. Write a function called flatten that receives
 * an array of arrays and returns a flattened array.
 */

/**
 * 1. Caso trivial:    Que el elemento no sea un arreglo, retorne el elemento
 * 2. Casos generales: Si es un arreglo, llame la función con el arreglo como argumento
 * 3. Recorrer cada uno de los elementos de cada arreglo en diferentes niveles
 */

/**
 * 
 * Recorrer el arreglo
 *      Recorrer cada uno de los arreglos hijos
 *          Ingresar cada elemento a un array auxiliar
 * 
 */

function flatten(element) {
    let arr = [];

    if(element instanceof Array) { //Si es un arreglo
        for (e of element) { //Recorrer cada elemento
            arr = arr.concat(flatten(e)); //Concatenar el resultado de ese subnivel
        }
    } else { //Si no es un arreglo
        arr.push(e); //Añadir al arreglo
    }
    
    return arr;
}

console.log(flatten([[1, 2, 3], [4, 5]])); // [1, 2, 3, 4, 5]
console.log(flatten([[[1, [1.1]], 2, 3], [4, 5]])); // [1, 1.1, 2, 3, 4, 5]