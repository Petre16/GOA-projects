const multiply = function(a, b) {
    return a * b;
};

setInterval(function() {
    console.log("This message logs every 2 seconds.");
}, 2000);

document.getElementById("myButton").addEventListener("click", function() {
    alert("Button was clicked!");
});

const add = (a, b) => a + b;

const isEvenOrOdd = num => (num % 2 === 0 ? "even" : "odd");

const getStringLengths = arr => arr.map(str => str.length);

const filterNegatives = arr => arr.filter(num => num >= 0);

(function() {
    console.log("Hello, world!");
})();

(function(num) {
    console.log("Square:", num * num);
})(5);

(function(arr) {
    const sum = arr.reduce((acc, curr) => acc + curr, 0);
    console.log("Sum:", sum);
})([1, 2, 3, 4, 5]);