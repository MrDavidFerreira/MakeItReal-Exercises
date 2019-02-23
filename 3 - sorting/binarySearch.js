/**
 * 
 * @param {Array} array Sorted array.
 */
function binarySearch(array, item) {
    return binarySearchHelper(array, item, 0, array.length);
}

/**
 * 
 * @param {Array} arr 
 * @param {Number} item Item to search
 * @param {Number} start 
 * @param {Number} end 
 */
function binarySearchHelper(arr, item, start, end) {

    console.log("input array = [", arr.slice(start, end).join(","), "]")
    let mid = start + Math.floor((end - start) / 2); //index of middle
    console.log(`start (end - start) / 2 = ${start} + (${end} - ${start}) / 2 = ${mid}`);
    console.log(`mid = ${arr[mid]}`);


    if (item == arr[mid]) {
        return mid;
    }

    if (end - start <= 1) {
        return -1;
    }
        
    let arr1 = "arr1 = [ " + arr.slice(start, mid).join(",") + " ]";
    let arr2 = "arr2 = [ " + arr.slice(mid + 1, end).join(",") + " ]";
    console.log(arr1);
    console.log(arr2);
    if (item < arr[mid]) {
        return binarySearchHelper(arr, item, start, mid)
    } else { //(item < array[middle])
        return binarySearchHelper(arr, item, mid + 1, end)
    }
}
//                         0   1   2   3   4   5   6   7   8    
console.log(binarySearch([10, 21, 32, 43, 54, 65, 76, 87, 98], 21));
