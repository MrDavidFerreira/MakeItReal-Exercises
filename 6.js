/**
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