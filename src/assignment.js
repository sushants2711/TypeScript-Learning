var longText = "sushsantkumarsingh text ook not then i can copy it 4-5 times yahooo...";
var extract = longText.substring(0, 10);
var shortText = extract.split("").sort().join("");
console.log("After sorting the split text: ", shortText);
console.log("---- ---- ----");
var str1 = "sushant";
var str2 = "sushant";
var isEqualStrings = str1 === str2;
console.log(isEqualStrings);
console.log("---- ---- ----");
var product = "Apple";
var price = 230;
console.log("The Price of ".concat(product, " is now $").concat(price, " per kg."));
console.log("---- ---- ----");
console.log("DAY 5 HW");
var isDivisibleBy4And8 = function (num) {
    if (num % 4 === 0 && num % 8 === 0) {
        return true;
    }
    else {
        return false;
    }
    ;
};
console.log(isDivisibleBy4And8(64));
console.log(isDivisibleBy4And8(20));
