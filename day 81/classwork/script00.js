// საკლასო დავალება:

// Use a while loop to print numbers from 1 to 20, but skip numbers between 10 and 15 using continue.

let num = 1;

while (num <= 20) {
    num++;
    
    if (num >= 10 && num <= 15) {
        continue;
    }
    console.log(num);
}