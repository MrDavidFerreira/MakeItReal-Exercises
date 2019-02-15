/**
 * Write a function called closestPairDiff that recieves an unordered
 * array of numbers and returns the smallest difference between a
 * pair of numbers.
 */


/**
 * 
 * @param {Array} array Unordered array of numbers
 */
function closestPairDiff(array) {
    // to be implemented...
    let smallestDiff = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (i != j) {
                let diff = Math.abs(array[i] - array[j]);

                if (diff < smallestDiff ) {
                    smallestDiff = diff;
                }

                if(smallestDiff == 0 ) {
                    return 0;
                }

            }
        }
    }
    return smallestDiff;
}

console.log(closestPairDiff([21, 6, 9, 2])); // 3 (6 and 9 are the closest pairs)
console.log(closestPairDiff([9, 4, 14, 11, 28, 19])); // 2 (9 and 11 are the closest pairs)