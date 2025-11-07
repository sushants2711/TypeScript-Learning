const player1: [string, number, boolean] = ["Rohit Sharma", 45, true];
console.log(player1);

console.log(player1[0]);
console.log(player1[1]);
console.log(player1[2]);


const printData = (player: [string, number, boolean]): void => {
    console.log(`The Player name is ${player[0]} and the jersey number is ${player[1]} ans is currently playing ODI format ${player[2]}`);
};

printData(player1);

console.log("---- ---- ---- ----");


type PlayerInfo = readonly [string, number, boolean];

const player2: PlayerInfo = ["Virat", 18, true];

console.log(player2);

const printData2 = (data: PlayerInfo): void => {
    const [name, jersey, active] = data;
    console.log(`Player name is ${name} and jersey number is ${jersey} and is currently playing ${active}`);
};

printData2(player2);

console.log("---- ---- ---- ----");

const playerData: PlayerInfo[] = [
    ["rohit", 45, true],
    ["virat", 18, true],
    ["jaiswal", 5, true],
    ["jadeja", 23, true],
    ["m shami", 78, false]
];


for (let player of playerData) {
    printData2(player);
};

