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


function setTimeout1(fn) {
    const setTimeout2 = Math.floor(Math.random() * 5000) + 1000
    console.log(`Delaying function by ${setTimeout2}ms`)
    setTimeout(fn, setTimeout2)
}

setTimeout1(() => {
    console.log("1-5 Seconds")
})


// 8

function coin1() {
    return new Promise((resolve, reject) => {
        const isHeads = Math.random() < 0.5
        setTimeout(() => {
            if (isHeads) {
                resolve("Heads")
            } else {
                reject("Tails")
            }
        }, 1000)
    })
}

coin1()
    .then(result => {
        console.log(result)
    })
    .catch(error => {
        console.log(error)
    })

console.log(new Promise(coin1))