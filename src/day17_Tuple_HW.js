var product1 = ["Macbook M4 Pro", 200000, 5];
var product2 = ["Apple 17 Pro Max", 178000, 3];
var displayInfo = function (data) {
    console.log("Product name is ".concat(data[0], " and the price is $").concat(data[1], " and the quantity left only ").concat(data[2]));
};
displayInfo(product1);
displayInfo(product2);
var studentData = [
    ["sushant", 90, 97, 90],
    ["abhijeet", 89, 90, 98],
    ["bro", 90, 89, 88],
    ["jay", 90, 98, 80]
];
var printAverage = function (data) {
    var name = data[0], math = data[1], science = data[2], computer = data[3];
    var sum = math + science + computer;
    var avg = (sum / 3).toFixed(2);
    console.log("".concat(name, " you score ").concat(avg, " %"));
};
for (var _i = 0, studentData_1 = studentData; _i < studentData_1.length; _i++) {
    var key = studentData_1[_i];
    printAverage(key);
}
;
var weatherData = [
    ["Bengaluru", 22, "Cool"],
    ["Chandigarh", 34, "Sunny"],
    ["Dhanbad", 23, "Cool"]
];
var printcityInfo = function (data) {
    console.log("The city name is ".concat(data[0], " and the temperature is ").concat(data[1], " degree and the condition is ").concat(data[2]));
};
for (var _a = 0, weatherData_1 = weatherData; _a < weatherData_1.length; _a++) {
    var key = weatherData_1[_a];
    printcityInfo(key);
}
;
