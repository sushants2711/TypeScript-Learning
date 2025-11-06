var greet = function (name) {
    console.log("Hey ".concat(name, ", Welcome to our Company"));
};
greet("sushant");
var sumOfNum = function (a, b) {
    var result = a + b;
    return result;
};
console.log(sumOfNum(4, 5));
// Palindrome of number
var isPalindrome = function (str) {
    var reversedStr = str.split("").reverse().join("");
    return reversedStr === str;
};
console.log(isPalindrome("madam"));
console.log(isPalindrome("Hello"));
// average of an array
var avg = function (num) {
    var result = num.reduce(function (acc, curr) { return acc + curr; }, 0);
    var length = num.length;
    var avgIs = result / length;
    return avgIs;
};
console.log(avg([1, 2, 3, 4, 55, 5]));
// max value from an array
var maxValue = function (num) {
    var result = Math.max.apply(Math, num);
    return result;
};
console.log(maxValue([12, 34, 56, 12, 11, 1, 67, 34, 23, 21]));
