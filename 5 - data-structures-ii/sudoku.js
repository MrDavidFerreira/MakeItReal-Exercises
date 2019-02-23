function sudoku(board) {
    return (sudokuSolverRecursive(parseBoard(board), 0, 0))
  }
  ​
  /**
   *
   * @param {Array} board 9 x 9 matrix representing the board.
   */
  function sudokuSolverRecursive(board, row, col) {
    // console.log("Solving for ", row, col);
    // console.log(board);
    if (row == 9) {
     return true;
    }
  ​
    let nextRow = (col < 8) ? row : row + 1
    let nextCol = (col < 8) ? col + 1 : 0
  ​
    if (isEmpty(board, row, col)) {
      let options = findOptions(board, row, col);
      // console.log("Options: ", options);
  ​
      // console.log(row, col, "-----------------------------")
      for (let o = 0; o < options.length; o++) {
        let boardCopy = copyArrayOfArrays(board);
        boardCopy[row][col] = options[o];
  ​
        let result = sudokuSolverRecursive(boardCopy, nextRow, nextCol)
  ​
        if (result) {
          return result;
        }
      }
    } else { //skip, go next cell
      let boardCopy = copyArrayOfArrays(board);
  ​
      return sudokuSolverRecursive(boardCopy, nextRow, nextCol);
    }
    return false; //if no solution found
  }
  ​
  /**
   *
   * @param {*} board Board (Matrix 2x2)
   * @param {*} i Row index.
   * @param {*} j Column index.
   */
  function isEmpty(board, i, j) {
    return isNaN(board[i][j]); // .
  }
  ​
  /**
   * @param {String} board String representing a sudoku board.
   * Every 9 characters represent each row of the board.
   * Spaces are represented with the dot character (.).
   *
   * @returns Array of arrays of characters.
   */
  function parseBoard(board) {
    let matrix = []
  ​
    let row = []
    for (let i = 0; i <= 81; i++) {
      if (i != 0 && i % 9 == 0) {
        matrix.push(row)
        row = []
      }
      row.push(board[i])
    }
  ​
    return matrix;
  }
  ​
  function findOptions(matrix, i, j) {
    let options = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
  ​
    for (let col = 0; col < 9; col++) {//look into col
      if (col == j) continue
  ​
      if (options.includes(matrix[i][col])) {
        options.splice(options.indexOf(matrix[i][col]), 1) //remove that option
      }
    }
    // console.log(`position [${i}][${j}]`)
  ​
    for (let row = 0; row < 9; row++) {//look into column
      if (row == i) continue
  ​
      if (options.includes(matrix[row][j])) {
        options.splice(options.indexOf(matrix[row][j]), 1) //remove that option
      }
    }
  ​
    {//look into square
      if (i >= 0 && i < 3) {
        if (j >= 0 && j < 3) { //1st square
  ​
          for (let r = 0; r < 3; r++) {
            for (let c = 0; c < 3; c++) {
              if (i == r && j == c) continue
  ​
              if (options.includes(matrix[r][c])) {
                options.splice(options.indexOf(matrix[r][c]), 1) //remove that option
              }
            }
          }
  ​
        } else if (j >= 3 && j < 6) {//2nd square
  ​
          for (let r = 0; r < 3; r++) {
            for (let c = 3; c < 6; c++) {
              if (i == r && j == c) continue
  ​
              if (options.includes(matrix[r][c])) {
                options.splice(options.indexOf(matrix[r][c]), 1) //remove that option
              }
            }
          }
  ​
        } else if (j >= 6 && j < 9) {//3rd square
  ​
          for (let r = 0; r < 3; r++) {
            for (let c = 6; c < 9; c++) {
              if (i == r && j == c) continue
  ​
              if (options.includes(matrix[r][c])) {
                options.splice(options.indexOf(matrix[r][c]), 1) //remove that option
              }
            }
          }
  ​
        }
      } else if (i >= 3 && i < 6) {
        if (j >= 0 && j < 3) {//4th square
  ​
          for (let r = 3; r < 6; r++) {
            for (let c = 0; c < 3; c++) {
              if (i == r && j == c) continue
  ​
              if (options.includes(matrix[r][c])) {
                options.splice(options.indexOf(matrix[r][c]), 1) //remove that option
              }
            }
          }
  ​
        } else if (j >= 3 && j < 6) {//5th square
  ​
          for (let r = 3; r < 6; r++) {
            for (let c = 3; c < 6; c++) {
              if (i == r && j == c) continue
  ​
              if (options.includes(matrix[r][c])) {
                options.splice(options.indexOf(matrix[r][c]), 1) //remove that option
              }
            }
          }
  ​
        } else if (j >= 6 && j < 9) {//6th square
  ​
          for (let r = 3; r < 6; r++) {
            for (let c = 6; c < 9; c++) {
              if (i == r && j == c) continue
  ​
              if (options.includes(matrix[r][c])) {
                options.splice(options.indexOf(matrix[r][c]), 1) //remove that option
              }
            }
          }
  ​
        }
      } else if (i >= 6 && i < 9) {
        if (j >= 0 && j < 3) {//7th square
  ​
          for (let r = 6; r < 9; r++) {
            for (let c = 0; c < 3; c++) {
              if (i == r && j == c) continue
  ​
              if (options.includes(matrix[r][c])) {
                options.splice(options.indexOf(matrix[r][c]), 1) //remove that option
              }
            }
          }
  ​
        } else if (j >= 3 && j < 6) {//8th square
  ​
          for (let r = 6; r < 9; r++) {
            for (let c = 3; c < 6; c++) {
              if (i == r && j == c) continue
  ​
              if (options.includes(matrix[r][c])) {
                options.splice(options.indexOf(matrix[r][c]), 1) //remove that option
              }
            }
          }
  ​
        } else if (j >= 6 && j < 9) {//9th square
  ​
          for (let r = 6; r < 9; r++) {
            for (let c = 6; c < 9; c++) {
              if (i == r && j == c) continue
  ​
              if (options.includes(matrix[r][c])) {
                options.splice(options.indexOf(matrix[r][c]), 1) //remove that option
              }
            }
          }
  ​
        }
      }
    }
    // console.log("options: [ " + options.join(", ") + " ]")
    return options;
  }
  ​
  function copyArrayOfArrays(array) {
    let aux = [];
    for (let i = 0; i < array.length; i++) {
      aux[i] = array[i].slice();
    }
    return aux;
  }
  ​
  const board = "...26.7.168..7..9.19...45..82.1...4...46.29...5...3.28..93...74.4..5..367.3.18..."
  console.log(sudoku(board)) //true
  let board2 = "..9.287..8.6..4..5..3.....46.........2.71345.........23.....5..9..4..8.7..125.3.."
  console.log(sudoku(board2)) //false