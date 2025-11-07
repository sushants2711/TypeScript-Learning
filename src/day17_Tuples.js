var player1 = ["Rohit Sharma", 45, true];
console.log(player1);
console.log(player1[0]);
console.log(player1[1]);
console.log(player1[2]);
var printData = function (player) {
    console.log("The Player name is ".concat(player[0], " and the jersey number is ").concat(player[1], " ans is currently playing ODI format ").concat(player[2]));
};
printData(player1);
console.log("---- ---- ---- ----");
var player2 = ["Virat", 18, true];
console.log(player2);
var printData2 = function (data) {
    var name = data[0], jersey = data[1], active = data[2];
    console.log("Player name is ".concat(name, " and jersey number is ").concat(jersey, " and is currently playing ").concat(active));
};
printData2(player2);
console.log("---- ---- ---- ----");
var playerData = [
    ["rohit", 45, true],
    ["virat", 18, true],
    ["jaiswal", 5, true],
    ["jadeja", 23, true],
    ["m shami", 78, false]
];
for (var _i = 0, playerData_1 = playerData; _i < playerData_1.length; _i++) {
    var player = playerData_1[_i];
    printData2(player);
}
;
