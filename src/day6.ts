let data1: any = 10;
data1 = "Sushant";
data1 = true;

console.log(data1);


let favNum: unknown = 10;

if (typeof favNum === "number") {
    if (favNum > 5) {
        console.log("Yes the number is greater than 5");
    };
};

