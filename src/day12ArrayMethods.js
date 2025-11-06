var stateName = ["Jharkhand", "Bihar", "Himachal", "Punjab", "Uttrakhand", "Odisha", "Bengal", "UttarPradesh", "Haryana"];
stateName.forEach(function (curr) { return console.log(curr); });
var addElementLength = stateName.map(function (curr) { return curr.length; });
console.log(addElementLength);
var filterlengthGraeterThan5 = stateName.filter(function (curr) { return curr.length > 5; });
console.log(filterlengthGraeterThan5);
var num = [1, 2, 3, 4, 54, 5, 5, 6, 7];
var sum = num.reduce(function (acc, curr) { return acc + curr; }, 0);
console.log(sum);
