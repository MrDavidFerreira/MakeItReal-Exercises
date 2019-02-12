/**
 * Obtener del número los millares, centeneas, decenas, unidades (división)
 *      Ir anexando a una cadena de texto las letras que representan cada parte del número 
 * 
 */

function toRoman(number) {
    let roman = "";
    // Millares -> M
    if (number > 999) {
        let thousands = Math.floor(number / 1000);
        number %= 1000;

        roman += "M".repeat(thousands);
    }

    // Centenas
    if (number > 99) {
        let hundreds = Math.floor(number / 100);
        number %= 100;

        switch (hundreds) {
            case 1:
            case 2:
            case 3:
                roman += "C".repeat(hundreds);
                break;
            case 4:
                roman += "CD";
                break;
            case 5:
            case 6:
            case 7:
            case 8:
                roman += "D" + "C".repeat(hundreds - 5);
                break;
            case 9:
                roman += "CM"
                break;
        }
    }

    // Decenas
    if (number > 9) {
        let tens = Math.floor(number / 10);
        number %= 10;

        switch (tens) {
            case 1:
            case 2:
            case 3:
                roman += "X".repeat(tens);
                break;
            case 4:
                roman += "XL";
                break;
            case 5:
            case 6:
            case 7:
            case 8:
                roman += "L" + "X".repeat(tens - 5);
                break;
            case 9:
                roman += "XC"
                break;
        }
    }

    // Units
    switch (number) {
        case 1:
        case 2:
        case 3:
            roman += "I".repeat(number);
            break;
        case 4:
            roman += "IV";
            break;
        case 5:
        case 6:
        case 7:
        case 8:
            roman += "V" + "I".repeat(number - 5);
            break;
        case 9:
            roman += "IX"
            break;
    }

    return roman;
}

console.log(toRoman(1)); // I
console.log(toRoman(4)); // IV
console.log(toRoman(10)); // X
console.log(toRoman(50)); // L
console.log(toRoman(100)); // C
console.log(toRoman(500)); // D
console.log(toRoman(476)); // CDLXXVI

// O(n) - Lineal