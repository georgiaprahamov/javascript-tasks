function binarySearch(arr, x) {
    // Инициализиране на началните и крайните индекси на масива
    var start = 0;
    var end = arr.length - 1;

    // Докато интервалът, в който се предполага, че се намира x, не бъде съкратен до един елемент или x не бъде намерен
    while (start <= end) {
        // Изчисляване на средния индекс
        var mid = Math.floor((start + end) / 2);
        // Ако x е намерен на mid индекса, връща mid
        if (arr[mid] === x) {
            return mid;
            // Ако x е по-голямо от елемента на mid индекса, продължава да търси в дясната половина на масива
        } else if (arr[mid] < x) {
            start = mid + 1;
            // Ако x е по-малко от елемента на mid индекса, продължава да търси в лявата половина на масива
        } else {
            end = mid - 1;
        }
    }

    // x не е намерен в масива
    return -1;
}

// Инициализиране на масив и елемент, който се търси
var arr = [1, 3, 5, 7, 8, 9];
var x = 8;

// Търсене на x в масива arr
console.log(arr);
var result = binarySearch(arr, x);

// Ако x не е намерен в масива, извежда съобщение в конзолата
if (result === -1) {
    console.log(x + " е намерен на позиция " + result);
    // Ако x е намерен в масива, извежда съобщение за неговата позиция
} else {
    console.log(x + " е намерен на позиция " + result + " в масива.");
}
