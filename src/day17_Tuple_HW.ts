type ProductInfo = readonly [string, number, number];

const product1: ProductInfo = ["Macbook M4 Pro", 200000, 5];
const product2: ProductInfo = ["Apple 17 Pro Max", 178000, 3];

const displayInfo = (data: ProductInfo): void => {
    console.log(`Product name is ${data[0]} and the price is $${data[1]} and the quantity left only ${data[2]}`);
};

displayInfo(product1);
displayInfo(product2);


type SubjectGrade = readonly [string, number, number, number];

const studentData: SubjectGrade[] = [
    ["sushant", 90, 97, 90],
    ["abhijeet", 89, 90, 98],
    ["bro", 90, 89, 88],
    ["jay", 90, 98, 80]
];

const printAverage = (data: SubjectGrade): void => {
    const [name, math, science, computer] = data;
    const sum = math + science + computer
    const avg = (sum / 3).toFixed(2);
    console.log(`${name} you score ${avg} %`);
};

for (let key of studentData) {
    printAverage(key);
};



type WeatherData = readonly [string, number, string];

const weatherData: WeatherData[] = [
    ["Bengaluru", 22, "Cool"],
    ["Chandigarh", 34, "Sunny"],
    ["Dhanbad", 23, "Cool"]
];

const printcityInfo = (data: WeatherData) => {
    console.log(`The city name is ${data[0]} and the temperature is ${data[1]} degree and the condition is ${data[2]}`);
};

for (let key of weatherData) {
    printcityInfo(key);
};