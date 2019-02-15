/**
 * 
 * @param {Array} array 
 */
function quickSort(array) {

    if(array.length <= 1) {
        return array;
    }
    let left = 0; //left most index
    let right = array.length - 1; // right most index

    let rightToLeft = true
    let pivotIndex = 0; //starts with first element

    // console.log(array)
    // console.log(`*left = ${left}`);
    // console.log(`*rigth = ${right}`);
    // console.log(`*selectedIndex = ${selectedIndex}`);
    // console.log(`*selected = ${array[selectedIndex]}\n`);
    while (right > left) {

        if (rightToLeft) {
            if (array[right] < array[pivotIndex]) {
                let lesser = array[right]
                array[right] = array[pivotIndex];
                array[pivotIndex] = lesser;


                rightToLeft = false;
                left++;
                pivotIndex = right;
            } else {
                right--;
            }
        } else { //(direction == "leftToRight")
            if (array[left] > array[pivotIndex]) {
                let greater = array[left];
                array[left] = array[pivotIndex];
                array[pivotIndex] = greater;

                rightToLeft = true;
                right--;
                pivotIndex = left;
            } else {
                left++;
            }
        }
        // console.log(`left = ${left}`);
        // console.log(`rigth = ${right}`);
        // console.log(`selectedIndex = ${selectedIndex}`);
        // console.log(`selected = ${array[selectedIndex]}`);
        // console.log(array); console.log();
    }
    // console.log(array)
    let array1 = array.slice(0, pivotIndex);
    // console.log(`array1 = ${array1}`);
    let array2 = array.slice(pivotIndex + 1, array.length);
    // console.log(`array2 = ${array2}\n`);

    return quickSort(array1).concat(array[pivotIndex]).concat(quickSort(array2));
}
console.log(quickSort([37, 2, 6, 4, 89, 8, 10, 12, 68, 45])) //[ 2, 4, 6, 8, 10, 12, 37, 45, 68, 89 ]