/**
 * Dividir la cadena a partir de los espacios en blanco
 * Declarar variable string vacía que será la más larga
 * Recorrer cada una de las palabras
 *      Comparar cada palabra con la palabra más larga para verificar si es más larga
 * 
 * 
 */

function findLongestWordLength(text) {
    const words = text.split(" ");
    let maxLength = 0;

    for(i = 0; i < words.length; i++) {
        let thisLength = words[i].length;

        if ( thisLength > maxLength) {
            maxLength = thisLength;
        }
    }

    return maxLength;
};

console.log(findLongestWordLength("The quick brown fox asdfjumped over the lazy dog")); // 6


// O(n) - Lineal