function insertionSort(array) {
    let arr = array.slice(); //array copy

    for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] > arr[i]) {
            let greater = arr[i - 1];
            arr[i - 1] = arr[i];
            arr[i] = greater;

            for (let j = i - 1; j > 0; j--) {
                if (arr[j - 1] > arr[j]) {
                    let tmp = arr[j];
                    arr[j] = arr[j - 1];
                    arr[j - 1] = tmp;
                } else {
                    break;
                }
            }

            console.log(arr)
        }
    }

    return arr;
}

console.log(insertionSort([5, 8, 3, 0, 7])); // [0, 3, 5, 7, 8]

console.log(insertionSort([75, 56, 85, 90, 49, 26, 12, 48, 40, 47]))
// [ 12, 26, 40, 47, 48, 49, 56, 75, 85, 90 ]