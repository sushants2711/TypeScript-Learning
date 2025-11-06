const stateName: string[] = ["Jharkhand", "Bihar", "Himachal", "Punjab", "Uttrakhand", "Odisha", "Bengal", "UttarPradesh", "Haryana"];

stateName.forEach((curr): void => console.log(curr));

const addElementLength: number[] = stateName.map((curr) => curr.length);
console.log(addElementLength);

const filterlengthGraeterThan5: string[] = stateName.filter((curr) => curr.length > 5);
console.log(filterlengthGraeterThan5);

const num: number[] = [1, 2, 3, 4, 54, 5, 5, 6, 7];
const sum: number = num.reduce((acc, curr) => acc + curr, 0);
console.log(sum)
