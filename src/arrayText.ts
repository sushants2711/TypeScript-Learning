// TypeScript Array Methods Cheat Sheet
// // Sample array for examples
// const numbers: number[] = [1, 2, 3, 4];
// const fruits: string[] = ["Mango", "Kiwi", "Orange"];

// 1️⃣ Adding Elements
// Method	What it does	Returns	Example
// push()	Add element(s) to end	number → new length	numbers.push(5) → 5
// unshift()	Add element(s) to start	number → new length	fruits.unshift("Apple") → 4
// numbers.push(5);       // numbers = [1,2,3,4,5]
// fruits.unshift("Apple"); // fruits = ["Apple","Mango","Kiwi","Orange"]

// 2️⃣ Removing Elements
// Method	What it does	Returns	Example
// pop()	Remove last element	Removed element	numbers.pop() → 5
// shift()	Remove first element	Removed element	fruits.shift() → "Apple"
// splice(startindex, delete count)	Remove/add element(s) by index	Array of removed elements	numbers.splice(1,2) → [2,3]
// numbers.pop();       // numbers = [1,2,3,4], returns 4
// fruits.shift();      // fruits = ["Mango","Kiwi","Orange"], returns "Apple"
// numbers.splice(1,2); // numbers = [1,4], returns [2,3]

// 3️⃣ Searching Elements
// Method	What it does	Returns	Example
// indexOf()	Index of element (first)	number or -1	numbers.indexOf(3) → 2
// lastIndexOf()	Index of element (last)	number or -1	[1,2,3,2].lastIndexOf(2) → 3
// includes()	Check if element exists	boolean	fruits.includes("Kiwi") → true
// find()	First element matching condition	Element or undefined	numbers.find(n => n>2) → 3
// findIndex()	Index of first element matching	number or -1	numbers.findIndex(n => n>2) → 2
// 4️⃣ Transforming / Iterating
// Method	What it does	Returns	Example
// map()	Transform each element	New array	numbers.map(n => n*2) → [2,4,6,8]
// filter()	Keep elements matching condition	New array	numbers.filter(n => n>2) → [3,4]
// forEach()	Iterate over elements	void	numbers.forEach(n => console.log(n))
// reduce()	Reduce array to single value	Result of callback	numbers.reduce((a,b) => a+b,0) → 10
// 5️⃣ Combining / Slicing
// Method	What it does	Returns	Example
// concat()	Combine arrays	New array	[1,2].concat([3,4]) → [1,2,3,4]
// slice()	Copy part of array	New array	[1,2,3,4].slice(1,3) → [2,3]
// join()	Convert array to string	String	[1,2,3].join("-") → "1-2-3"
// 6️⃣ Sorting / Reversing
// Method	What it does	Returns	Example
// sort()	Sort elements (lexical by default)	Sorted array	[3,1,2].sort() → [1,2,3]
// reverse()	Reverse elements	Reversed array	[1,2,3].reverse() → [3,2,1]
// 7️⃣ Checks / Conditions
// Method	What it does	Returns	Example
// every()	Check if all elements match condition	boolean	[2,4,6].every(n => n%2===0) → true
// some()	Check if any element matches condition	boolean	[1,2,3].some(n => n>2) → true
// 8️⃣ Nested Arrays / Filling
// Method	What it does	Returns	Example
// flat()	Flatten nested arrays	New array	[1,[2,3]].flat() → [1,2,3]
// fill()	Fill array with value	Modified array	[1,2,3].fill(0) → [0,0,0]
// 9️⃣ Type-Safe Example in TypeScript
// const numbers: number[] = [1,2,3];
// const fruits: string[] = ["Mango","Kiwi"];

// // Add element
// numbers.push(4);           // numbers = [1,2,3,4]
// fruits.unshift("Apple");   // fruits = ["Apple","Mango","Kiwi"]

// // Remove element
// const last = numbers.pop(); // last = 4
// const firstFruit = fruits.shift(); // firstFruit = "Apple"

// // Transform
// const doubled = numbers.map(n => n*2); // [2,4,6]

// // Search
// const idx = fruits.indexOf("Kiwi"); // 1
// const exists = fruits.includes("Orange"); // false