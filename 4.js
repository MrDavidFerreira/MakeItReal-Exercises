/**
 * 
 * Mientras una condición de que el arreglo no está ordenado
 *      Recorrer el arreglo
 *          Si el elemento actual es mayor que el elemento siguiente
 *              Intercambiar elementos
 *              Marcar como no-ordenada
 * 
 */

function sort(array) {
    let ordered;

    do {
        ordered = true;

        for (i = 0; i < array.length; i++) {
            if (array[i] > array[i + 1]) {
                let temp = array[i]; //swap elements
                array[i] = array[i + 1];
                array[i + 1] = temp;

                ordered = false;
            }
        }
    } while (!ordered);

    return array;
}

console.log(sort([5, 8, 3, 0, 7])); // [0, 3, 5, 7, 8]

// O(n^2)