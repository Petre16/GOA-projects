// სალასო დავალება
// გამოითვალეთ ლუწი რიცხვების ჯამი 1 დან 20 მდე do..while გამოყენებით

let sum = 0;
let i = 1;

do {
    if (i % 2 === 0) {
        sum += i;
    }
    i++;
} while (i <= 20);
console.log(sum);