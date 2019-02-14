
/**
 * 
 * @param {Array} array 
 */
function mergeSort(array) {

    if (array.length <= 1) {
        return array;
    } else {
        let middle = Math.ceil(array.length / 2)

        let array1 = array.slice(0, middle);
        console.log(array1)

        let array1Ordered = mergeSort(array1);
        console.log(`array1Ordered = ${array1Ordered}`)

        let array2 = array.slice(middle, array.length);
        console.log(array2)


        let array2Ordered = mergeSort(array2);
        console.log(`array2Ordered = ${array2Ordered}`)

        return merge(array1Ordered, array2Ordered);
    }
}

/**
 * Merge two sorted arrays.
 * Does not work with unsorted arrays.
 * @param {Array} array1 
 * @param {Array} array2 
 */
function merge(array1, array2) {
    let combined = [];

    let i = 0; //array1 index
    let j = 0; //array2 index

    while (i < array1.length || j < array2.length) {
        if (i == array1.length) {
            combined = combined.concat(array2.slice(j));
            break;
        }

        if(j == array2.length) {
            combined = combined.concat(array1.slice(i));
            break;
        }

        if(array1[i] <= array2[j]) {
            combined.push(array1[i++]);
        } else {
            combined.push(array2[j++]);
        }
    }

    return combined;
}

console.log(mergeSort([75, 56, 85, 90, 49, 26, 12, 48, 40, 47]))

