/**
 * There are N people in a queue. Each person wears a sticker with their initial position in the
 * queue starting from 1 to N. Any person in the queue can bribe the person directly in front of
 * them to swap positions. One person can bribe at most two others. Even if they swap positions
 * they will keep their original sticker.
 * 
 * For example, if N is 8 and person 5 bribes person 4, the queue will look like this:
 * 
 * 1, 2, 3, 5, 4, 6, 7, 8.
 * 
 * Given a queue determine the minimum number of bribes that took place to get the queue to the
 * current state. If the configuration is not possible return -1.
 */

/**
 * 
 * @param {Array} array 
 */
function numberOfBribes(array) {
    let arr = array.slice(); //Copia del array

    let bribes = 0;

    // [0, 1, 2, 3, 4] index
    // [1, 2, 3, 4, 5] index + 1 (rigth way)
    // [2, 1, 5, 3, 4]
    for (let i = 0; i < arr.length; i++) { //Recorrer elemento por elemento
        let j = i;
        let swaps = 0; //Contador del número de intercambios 

        do {
            if (arr[j] == j + 1) { //Si el objeto está en la posición correcta
                bribes += swaps; //Incrementar los intercambios que fueron necesarios para que el elemento esté en la posición correcta
                break;
            } else {
                if (swaps == 2) { //Si excedió el límite de intercambios por número
                    return -1;
                }
                //swap
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;


                j++;
                swaps++;
            }
        } while (true);
    }
    return bribes;
}

console.log(numberOfBribes([2, 1, 5, 3, 4])); // 3
console.log(numberOfBribes([2, 5, 1, 3, 4])); // -1
console.log(numberOfBribes([2, 4, 5, 3, 1])); // 3


/*   La función pero con muchos logs
function numberOfBribes(array) {
    let arr = array.slice();

    let bribes = 0;

    for (let i = 0; i < arr.length; i++) {
        console.log(`<<< index = ${i} >>>`)
        let j = i;
        let swaps = 0;

        do {
            console.log("\t[ " + arr.join(", ") + " ]   (checking...  -> " + arr[j] + ")");
            console.log();
            console.log(`\tarr[${j}] = ${arr[j]} === ${j + 1}    ${arr[j] == j + 1}\n`)
            if (arr[j] == j + 1) {
                break;
            } else {
                if (swaps == 2) {
                    return -1;
                }

                console.log("\t[ " + arr.join(", ") + " ]");
                {//print
                    let str = "\t "
                    for (let index = 0; index < arr.length; index++) {
                        if (index == j || index == j + 1) {
                            str += " ^ "
                        } else {
                            str += "   ";
                        }
                    }
                    console.log(str + "    (swapping..)");
                }
                //swap
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;


                j++;
                swaps++;
                bribes++;
                console.log("\t[ " + arr.join(", ") + " ]   (after swap)");
                console.log()
            }
        } while (true);
    }
    return bribes;
}
*/