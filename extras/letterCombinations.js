
/**
 * Recorrer cada dígito
 *      Obtener las letras que representan ese número
 *      Recorrer cada letra
 *          Obtener las diferentes combinaciones pasando al siguiente digito
 */

 /**
  * Letter combinations of a phone number.
  * https://leetcode.com/problems/letter-combinations-of-a-phone-number/
  * @param {string} digits Digits.
  * @returns {Array} Array with all the different combinations.
  */
function letterCombinations(digits) {
    return letterCombinationsHelper(digits, "");
}

/**
 * 
 * @param {string} digits 
 * @param {string} str 
 * @returns {Array} 
 */
function letterCombinationsHelper(digits, str) {

    if (str.length == digits.length) {//trivial case
        return str;
    } else {
        let solutions = []

        let i = str.length //current digit index 

        let letters = digitToLetters(digits[i])

        for (const letter of letters) {
            let combination = letterCombinationsHelper(digits, str + letter)
            solutions = solutions.concat(combination)
        }

        return solutions
    }

}

/**
 * 
 * @param {string} digit 
 * @returns {string}
 */
function digitToLetters(digit) {
    let result;

    switch (digit) {
        case "2":
            result = "abc";  //3
            break;
        case "3":
            result = "def";  //3
            break;
        case "4":
            result = "ghi";  //3
            break;
        case "5":
            result = "jkl";  //3
            break;
        case "6":
            result = "mno";  //3
            break;
        case "7":
            result = "pqrs"; //4
            break;
        case "8":
            result = "tuv";  //3
            break;
        case "9":
            result = "wxyz"; //4
            break;
        default:
            result = null;
    }

    return result;
}

console.log(letterCombinations("23").length) //["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]
console.log(letterCombinations("582"))