// union - union means either one of them must be exist. A variable that can hold at least on data types from multiple options.
// It can only store unique value

let a: number | string | boolean = 90;


const checkInputType = (value: number | string): number | string => {
    const result = typeof value === "number" ? value * value : value.toUpperCase();
    return result;
};

console.log(checkInputType(8));
console.log(checkInputType("thapa is a good teacher"))


const performActionOnInputType = (value: number | string | boolean): void => {
    if (typeof value === "boolean") {
        if (value === true) {
            console.log("Yes");
        } else {
            console.log("No");
        };
    } else if (typeof value === "number") {
        const data = value.toFixed(2);
        console.log(`$${data}`);
    } else {
        const data = value.charAt(0).toUpperCase();
        const splitData = value.substring(1);
        console.log(data + splitData);
    };
};

performActionOnInputType(12);
performActionOnInputType(true);
performActionOnInputType(false);
performActionOnInputType("sushant singh");