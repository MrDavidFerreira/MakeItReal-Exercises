/**
 * Recorrer las filas/columnas/diagonales
 *      Si se repite tres veces el mismo símbolo
 *          Devolver símbolo
 */

function tictactoe(matrix) {
    // Diagonal1 \
    let xd1 = 0;
    let od1 = 0;
    // Diagonal2 /
    let xd2 = 0;
    let od2 = 0;
    for (i = 0; i < 3; i++) {
        // Horizontales
        let xh = 0;
        let oh = 0;
        // Verticales
        let xv = 0;
        let ov = 0;

        for (j = 0; j < 3; j++) {
            if (matrix[i][j] == "X") {
                xh++;
            } else if (matrix[i][j] == "O") {
                oh++;
            }

            if (matrix[j][i] == "X") {
                xv++;
            } else if (matrix[j][i] == "O") {
                ov++;
            }
        }

        if (matrix[i][i] == "X") {
            xd1++;
        } else if (matrix[i][i] == "O") {
            od1++;
        }

        if (matrix[i][2 - i] == "X") {
            xd2++;
        } else if (matrix[i][2 - i] == "O") {
            od2++;
        }

        if (xh == 3 || oh == 3 || xv == 3 || ov == 3)
            return true;
    }

    if (xd1 == 3 || od1 == 3 || xd2 == 3 || od2 == 3)
        return true;
    else
        return false;
}

console.log(tictactoe([
    ['X', '', 'O'],
    ['', 'X', 'O'],
    ['O', '', 'X']
])); // true

console.log(tictactoe([
    ['O', 'X', 'O'],
    ['', 'X', 'O'],
    ['O', '', 'X']
])); // false

// O(n^2) - Exponencial