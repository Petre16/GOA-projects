// 2-6

function hello1() {
    setTimeout(() => {
        console.log("Hello after 2 seconds")
    }, 2000)
}

hello1()


function after13() {
    setTimeout(() => {
        console.log("After 1 second")
    }, 1000)

    setTimeout(() => {
        console.log("After 3 seconds")
    }, 3000)
}

after13()


function interval2() {
    setTimeout(() => {
        console.log("First")

        setTimeout(() => {
            console.log("Second")

            setTimeout(() => {
                console.log("Third")
            }, 2000)

        }, 2000)

    }, 2000)
}

interval2()


function countdown5(from) {
    for (let i = from; i > 0; i--) {
        setTimeout(() => {
            console.log(i)
        }, (from - i + 1) * 1000)
    }
}

countdown5(5)


const logName = () => console.log("Data");

const delayFunc = () => {
    const randomTime = Math.ceil(Math.random() * 5);
    console.log(randomTime);

    setTimeout(() => logName(), randomTime * 1000);
};

delayFunc();


// 8

const myPromise = new Promise((resolve, reject) => {
    let randomNum = Math.random();
    console.log(randomNum);

    if (randomNum < 0.5) {
        resolve("Heads");
    } else {
        reject("Tails");
    }
});

console.log(myPromise);