/**
 * 
 * Un ciclo que recorra cada uno de los nodos  
 *      Por cada nodo recorrido, recorrer los nodos que no se han recorrido
 *      Si ya se han recorrido todos los nodos, devolver la suma del trayecto final al inicial
 */


/**
 * 
 * @param {Array} matrix Adjacency matrix.
 */
function travelSalesman(matrix) {
    return travelSalesmanRecursive(matrix, []);
}

/**
 * 
 * @param {Array} matrix 
 * @param {Array} history 
 */
function travelSalesmanRecursive(matrix, history) {
    if(history.length == matrix.length) {
        let startNode = history[0];
        let lastNode = history[history.length - 1];
        return matrix[lastNode][startNode];
    }

    let min = Number.MAX_SAFE_INTEGER; //To calculate the minimum sum

    for (let i = 0; i < matrix.length; i++) {
        if (!history.includes(i)) { //si esa fila ya se recorrió
            history.push(i);

            let historyCopy = history.slice(); //array copy

            let moveValue = 0;

            if(history.length != 1) {
                let prev = history[history.length - 2];
                moveValue = matrix[prev][i];
            }

            //  Suma el movimiento actual con el siguiente
            let sum = moveValue + travelSalesmanRecursive(matrix, historyCopy)
            
            if (sum < min) { //Si la suma es menor que el mínimo actual
                min = sum;  //Asignar como nuevo mínimo
            }
            history.pop();
        }
    }

    return min;
}

const mat = [
    [0, 10, 15, 20],//0
    [5,  0,  9, 10],//1
    [6, 13,  0, 12],//2  6
    [8,  8,  9,  0],//3
]
console.log(travelSalesman(mat)); //35?