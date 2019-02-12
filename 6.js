/**
 * Declarar una condición por cada letra de la primera que indique si esa letra se encuentra en la segunda. Si no se encuentra, terminar y devolver falso.
 * 
 * Recorrer cada letra de la primera palabra
 *      Compararla con cada letra de la segunda
 *      Si es igual a alguna letra de la segunda
 *          Marcar esa letra de la segunda como ya comprobada. No se puede volver a comparar.
 *          Marcar la letra de la primera como encontrada.
 *              
 */

function anagram(s1, s2) {
    let found;
    let s2Array = s2.split("");

    for (l of s1) {
        found = false;
        for(i = 0; i < s2Array.length; i++) {
            if (l == s2Array[i]) {
                s2Array[i] = null;
                found = true;
                break;
            }
        }

        if (!found) return found;
    }

    return found;
}

console.log(anagram("aaaiaa", "iaaaaa")); // true
console.log(anagram("hello", "world")); // false

// O(n^2) - Exponencial