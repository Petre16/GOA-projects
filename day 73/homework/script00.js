let count = 1;
let counterInterval = setInterval(() => {
    console.log(count);
    count++;
    if (count > 5) clearInterval(counterInterval);
}, 1000);

let msgInterval = setInterval(() => {
    console.log("This message appears every 2 seconds");
}, 2000);
setTimeout(() => clearInterval(msgInterval), 10000);

let colors = ["#f99", "#9f9", "#99f", "#ff9", "#9ff"];
let colorIndex = 0;
let colorInterval = setInterval(() => {
    document.body.style.background = colors[colorIndex];
    colorIndex++;
    if (colorIndex >= colors.length) clearInterval(colorInterval);
}, 3000);

let timeCount = 0;
let timeInterval = setInterval(() => {
    console.log(new Date().toLocaleTimeString());
    timeCount++;
    if (timeCount >= 15) clearInterval(timeInterval);
}, 1000);

let timer = 0;
let timerInterval = setInterval(() => {
    timer++;
    console.log("Timer:", timer, "seconds");
    if (timer >= 10) clearInterval(timerInterval);
}, 1000);

let arr1 = [10, 20, 30, 40];
console.log(arr1[1]);

arr1[0] = 100;
console.log(arr1);

let arr2 = ["apple", "banana", "cherry"];
console.log(arr2[0]);
console.log(arr2[1]);
console.log(arr2[2]);

let arr3 = [5, 10, 15, 20, 25];
let sum = arr3[0] + arr3[arr3.length - 1];
console.log(sum);