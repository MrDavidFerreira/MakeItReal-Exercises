//



function shortestPath(matrix, source, dest) {
    return shortestPathHelper(matrix, source, dest, [])
}

/**
 * 
 * @param {Array} matrix Adjacency matrix.
 * @param {Number} source Source node.
 * @param {Number} dest Destination node.
 * @param {Array} history Array containing the visited nodes.
 */
function shortestPathHelper(matrix, source, dest, history) {
    if (source == dest) { //trivial case
        return 0;
    }

    history.push(source); //incluir fila en el historial

    let min = Number.MAX_SAFE_INTEGER; //El mayor número entero empieza siendo el mínimo

    for (let i = 0; i < matrix.length; i++) {
        if (!history.includes(i)) { //si esa fila ya se recorrió
            let historyCopy = history.slice(); //array copy
            //  Suma el movimiento actual con el siguiente
            let sum = matrix[source][i] + shortestPathHelper(matrix, i, dest, historyCopy)
            
            if (min > sum) { //Si la suma es menor que el mínimo actual
                min = sum;  //Asignar como nuevo mínimo
            }
        }
    }
    return min;
}

const mat = [
    [0, 10, 15, 20],//0
    [5,  0,  9, 10],//1
    [6, 13,  0, 12],//2
    [8,  8,  9,  0],//3
]
console.log(shortestPath(mat, 0, 3)); //20
console.log(shortestPath(mat, 3, 1)); //8
console.log(shortestPath(mat, 1, 0)); //5

//Accediendo directamente de 0 a 3 = 20
//En cambio, si la ruta es 0,1,3 = 12
const mat2 = [
    [0,  2, 15, 20],//0
    [5,  0,  9, 10],//1
    [6, 13,  0, 12],//2
    [8,  8,  9,  0],//3
]
console.log(shortestPath(mat2, 0, 3)); //12
