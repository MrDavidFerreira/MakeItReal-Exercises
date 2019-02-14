function bubbleSort(array) {
    let ordered;

    do {
        ordered = true;

        for (i = 0; i < array.length; i++) {
            if (array[i] > array[i + 1]) {
                let temp = array[i]; //swap elements
                array[i] = array[i + 1];
                array[i + 1] = temp;

                ordered = false;
            }
        }

    } while (!ordered);

    return array;
}

console.log(bubbleSort([5, 8, 3, 0, 7])); // [0, 3, 5, 7, 8]