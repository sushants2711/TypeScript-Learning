var firstStudent = {
    name: "Sushant Singh",
    age: 22,
    isStudent: true,
    rollNo: "21BCS11374",
    session: 2021
};
console.log(firstStudent);
console.log("---- ---- ---- ----");
var product = {
    name: "Laptop",
    price: 40500,
    quantity: 10
};
var totalPrice = (function (product) { return product.price * product.quantity; });
console.log(totalPrice(product));
