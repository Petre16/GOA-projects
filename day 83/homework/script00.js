function localVarExample() {
    let localVar = "I'm local!";
    console.log("Inside function:", localVar); // Works
}
localVarExample();

function outerFunction() {
    let count = 0;
    console.log("Before innerFunction, count =", count);
    function innerFunction() {
        count += 5;
        console.log("Inside innerFunction, count =", count);
    }
    innerFunction();
    console.log("After innerFunction, count =", count);
}
outerFunction();

function scopeTest() {
    if (true) {
        var a = 1;
        let b = 2;
        const c = 3;
        console.log("Inside block:", a, b, c);
    }
    console.log("Outside block, var a:", a);
}
scopeTest();

console.log("eval('2 + 2') =", eval("2 + 2"));

eval("var x = 10;");
console.log("x after eval:", x);

eval("function greet() { return 'Hello'; }");
console.log("greet():", greet());

let message = 'Hi';
eval("console.log('Inside eval, message =', message)");