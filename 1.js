/**
 * Given two strings... s1 and s2
 * 
 * Crear una nueva cadena (vacía)
 * 
 * Recorrer las letras de la primera cadena
 *     Por cada letra de la primera cadena, recorrer las letras de la segunda
 *          Si la letra de la primera es igual a la letra de la segunda y no la contiene en la nueva cadena a generar
 *              Adjuntarla a la nueva cadena a generar
 * 
 */

function repeatedChars(s1, s2) {

    let newString = ""

    for (let p of s1) {
        for (let q of s2) {
            if(p == q && newString.indexOf(p) == -1) {
                newString += p;
            }
        }
    }

    return newString;
};

console.log(repeatedChars("german", "gabriela")); //gera

//exponencial O(n^2)
