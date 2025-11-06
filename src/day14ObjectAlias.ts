type Student = {
    name: string,
    age: number,
    isStudent: boolean,
    rollNo: string,
    session: number
};

const firstStudent: Student = {
    name: "Sushant Singh",
    age: 22,
    isStudent: true,
    rollNo: "21BCS11374",
    session: 2021
};

console.log(firstStudent);

console.log("---- ---- ---- ----");

type Product = {
    name: string,
    price: number,
    quantity: number
};

const product: Product = {
    name: "Laptop",
    price: 40500,
    quantity: 10
};

const totalPrice = ((product: Product): number => product.price * product.quantity);
console.log(totalPrice(product)) 