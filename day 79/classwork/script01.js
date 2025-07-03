// საკლასო დავალება

// გამოიტანე ლუწი და კენტი რიცხვების ჯამი ცალ-ცალკე for..of ის დახმარებით

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evenSum = 0;
let oddSum = 0;

for (let num of numbers) {
    if (num % 2 === 0) {
        evenSum += num;
    } else {
        oddSum += num;
    }
}

console.log(evenSum);
console.log(oddSum);