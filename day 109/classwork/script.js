// საკლასო დავალება:

// შექმენით ასინქრონული arrow ფუნქცია, რომელსაც გადაეცემა სთრინგი. თუ სთრინგის სიგრძე არის ლუწი, ფუნქციამ დააბრუნოს "even", ხოლო სხვა შემთხვევაში "odd".

// გამოიძახეთ ფუნქცია, დაბრუნებულ promise-ზე გამოიძახეთ then მეთოდი და დაბეჭდეთ დაბრუნებული ინფორმაცია.


const evenOrOddString = async (str) => {
    if (str.length % 2 === 0) {
        return "even"
    } else {
        return "odd"
    }
}

evenOrOddString("Name")
    .then(result => console.log(result))



// საკლასო დავალება:

// შექმენით ფუნქცია, რომელსაც გადაეცემა რიცხვი. ფუნქციამ 2 წამში უნდა დააბრუნოს promise და თუ რიცხვი მეტია 10-ზე, მოახდინოს resolve "resolve" სთრინგით, ხოლო სხვა შემთხვევაში მოახდინოს reject "reject" სთრინგით.

// შემდეგ, შეადგინეთ ასინქრონული ფუნქცია, რომელსაც პარამეტრი არ გადაეცემა. ამ ფუნქციაში ცვლადში უნდა შეინახოთ პირველი ფუნქციის მიერ დაბრუნებული promise ობიექტის resolved მნიშვნელობა და შემდეგ ეს ცვლადი დაბეჭდოთ კონსოლში.

// საბოლოოდ, გამოიძახეთ მეორე ფუნქცია.


const createP = (num1) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (num1 > 10) {
                resolve("resolve")
            } else {
                reject("reject")
            }
        }, 2000)
    })
}


const asyncF = async () => {
    const resolved = await createP(20)
    console.log(resolved)
}

asyncF()