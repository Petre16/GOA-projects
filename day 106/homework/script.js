function createPromise(num1) {
    return new Promise((resolve, reject) => {
        if (num1 % 2 === 0) {
            resolve("resolve")
        } else {
            reject("reject")
        }
    })
}

function successHandler(message) {
    console.log(message)
}

function failureHandler(message) {
    console.log(message)
}

createPromise(76).then(successHandler, failureHandler)
createPromise(67).then(successHandler, failureHandler)