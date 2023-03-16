// hàm sort
function sortArr(arr, callback) {
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (callback(arr[i], arr[j]) > 0) {
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
            if (callback(arr[j], arr[i]) < 0) {
                var temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }
    }
    return arr;
}
var numberArr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
var stringArr = ["long", "ha", "fdfdfdg"];
var sortedNumbersArr = sortArr(numberArr, function (a, b) { return b - a; });
var sortStringArr = sortArr(stringArr, function (a, b) { return b.localeCompare(a); });
console.log(sortStringArr);
