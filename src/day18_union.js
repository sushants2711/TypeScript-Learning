// union - union means either one of them must be exist. A variable that can hold at least on data types from multiple options.
// It can only store unique value
var a = 90;
var checkInputType = function (value) {
    var result = typeof value === "number" ? value * value : value.toUpperCase();
    return result;
};
console.log(checkInputType(8));
console.log(checkInputType("thapa is a good teacher"));
var performActionOnInputType = function (value) {
    if (typeof value === "boolean") {
        if (value === true) {
            console.log("Yes");
        }
        else {
            console.log("No");
        }
        ;
    }
    else if (typeof value === "number") {
        var data = value.toFixed(2);
        console.log("$".concat(data));
    }
    else {
        var data = value.charAt(0).toUpperCase();
        var splitData = value.substring(1);
        console.log(data + splitData);
    }
    ;
};
performActionOnInputType(12);
performActionOnInputType(true);
performActionOnInputType(false);
performActionOnInputType("sushant singh");
