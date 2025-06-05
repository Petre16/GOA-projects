// 8
let i = 1, out = "";
while (i <= 5) {
    out += i + "\n";
    i++;
}
document.getElementById("while1to5").textContent = out;

// 9
i = 2; out = "";
while (i <= 10) {
    out += i + "\n";
    i += 2;
}
document.getElementById("whileEven2to10").textContent = out;

// 10
i = 10; out = "";
while (i >= 1) {
    out += i + "\n";
    i--;
}
document.getElementById("while10to1").textContent = out;

// 11
out = "";
for (let j = 1; j <= 10; j++) {
    out += j + "\n";
}
document.getElementById("for1to10").textContent = out;

// 12
out = "";
for (let j = 1; j <= 5; j++) {
    out += (j * 3) + "\n";
}
document.getElementById("forMultiplesOf3").textContent = out;

// 13
out = "";
for (let j = 10; j >= 1; j--) {
    out += j + "\n";
}
document.getElementById("for10to1").textContent = out;

// 14
out = "";
for (let j = 1; j <= 20; j++) {
    if (j % 2 === 0) {
        out += j + "\n";
    }
}
document.getElementById("forEven1to20").textContent = out;

// 15
let sum = 0;
for (let j = 1; j <= 5; j++) {
    sum += j;
}
document.getElementById("sum1to5").textContent = sum;