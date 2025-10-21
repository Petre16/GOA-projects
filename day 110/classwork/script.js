// საკლასო დავალება:

// შექმენით ასინქრონული ფუნქცია სახელად getFootballData, სადაც მოცემულ ლინკზე გააგზავნით requests და წამოღებულ ინფორმაციას თან გადაიყვანთ json ფორმატში, რომ შემდეგ დაბეჭდოთ ის.

// https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=Arsenal


async function getFootballData() {
    const func1 = await fetch("https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=Arsenal")
    const func2 = await func1.json()
    console.log(func2)
}

getFootballData()


// საკლასო დავალება:

// შექმენით ფუნქცია, რომელიც დააბრუნებს promise-ს 2 წამში. თუ randomNumber ნაკლები იქნება 0.5-ზე promise-მა მოახდინოს resolve "success" სთრინგით, ხოლო სხვა შემთხვევაში reject "fail სთრინგით".

// შექმენით ასინქრონული ფუნქცია, სადაც გექნებათ try catch კოდის ბლოკი - დაიბეჭდება resolved value / rejected value.


function randomPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomNum = Math.random()
            if (randomNum < 0.5) {
                resolve("Success")
            } else {
                reject("Fail")
            }
        }, 2000)
    })
}

async function asyncPromise() {
    try {
        const result = await randomPromise()
        console.log("Resolved: ", result)
    } catch (error) {
        console.log("Rejected: ", error)
    }
}

asyncPromise()