function qcheck(array) {
    let board = []

    for (let i = 0; i < array.length; i++) {
        let row = []
        for (let j = 0; j < array.length; j++) {
            row.push(".")
        }
        board.push(row)
    }

    for (let row = 0; row < array.length; row++) {
        let pos = array[row] - 1

        for (let j = 0; j < array.length; j++) {

            if (j != pos) {
                if (board[row][j] != ".") {
                    return false;
                }
            }

            if (j != row) {
                if (board[j][pos] != ".") {
                    return false;
                }
            }
        }

        //    \
        let rowIn = row + 1
        let colIn = pos + 1

        while (rowIn < array.length && colIn < array.length) {
            if (board[rowIn][colIn] != ".") {
                return false;
            }

            rowIn++
            colIn++
        }

        rowIn = row - 1
        colIn = pos - 1

        while (rowIn >= 0 && colIn >= 0) {
            if (board[rowIn][colIn] != ".") {
                return false;
            }
            rowIn--
            colIn--
        }

        //   /
        rowIn = row - 1
        colIn = pos + 1

        while (rowIn >= 0 && colIn < array.length) {
            if (board[rowIn][colIn] != ".") {
                return false;
            }

            rowIn--
            colIn++
        }

        rowIn = row + 1
        colIn = pos - 1

        while (rowIn < array.length && colIn >= 0) {
            if (board[rowIn][colIn] != ".") {
                return false;
            }
            rowIn++
            colIn--
        }


        board[row][pos] = "Q"
    }
    console.log(board)
    return true;
}

console.log(qcheck([4, 2, 7, 3, 6, 8, 5, 1])) //=> true
console.log(qcheck([2, 5, 7, 4, 1, 8, 6, 3])) //=> true
console.log(qcheck([5, 3, 1, 4, 2, 8, 6, 3])) //=> false   (b3 and h3 are on the same row)
console.log(qcheck([5, 8, 2, 4, 7, 1, 3, 6])) //=> false   (b8 and g3 are on the same diagonal)
console.log(qcheck([4, 3, 1, 8, 1, 3, 5, 2])) //=> false   (multiple problems)