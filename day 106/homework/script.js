const createPromise = num => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            if (num % 2 === 0) {
                res("resolve")
            } else {
                rej("reject")
            }
        }, 3000)
    })
}

const myPromise = createPromise(16)

myPromise.then(
    (returnedValue) => {
        console.log(`Success: ${returnedValue}`)
    },
    (returnedValue) => {
        console.log(`Failure: ${returnedValue}`)
    }
)