function selectionSort(array) {
    let arr = array.slice();
    let orderedArr = [];
    

    do {
        let minIndex = 0; //Índice del mínimo
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < arr[minIndex]) {
                minIndex = i;
            }
        }
        orderedArr.push(arr[minIndex]);
        arr.splice(minIndex, 1)
    } while (arr.length > 0);

    return orderedArr;
}

console.log(selectionSort([5, 8, 3, 0, 7])); // [0, 3, 5, 7, 8]