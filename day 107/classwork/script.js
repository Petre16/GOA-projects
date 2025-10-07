// საკლასო დავალება:

// შექმენით ფუნქცია, სახელად workingOnPromise, რომელსაც გადაეცემა ერთი სთრინგი.

// ფუნქციაში უნდა შეიქმნას promise, რომელიც resolve-ს მაშინ მოახდენს, როდესაც სთრინგის სიგრძე მეტი იქნება 5-ზე, ხოლო სხვა შემთხვევაში მოხდება reject. promise-ში უნდა გქონდეთ ასინქრონული ოპერაცია, ანუ სთრინგის შემოწმება ჩასვით setTimeout-ში.

// თვითონ ფუნქციაშივე promise-ზე გამოიძახეთ then და catch მეთოდები, რომლებიც დაბეჭდავენ დაბრუნებულ ინფორმაციას.

// საბოლოოდ, ფუნქცია გამოიძახეთ 3-ჯერ, განსხვავებული სთრინგებით.


const workingOnPromise = (str1) => {
    const promise = new Promise((res, rej) => {
        setTimeout(() => {
            if (str1.length > 5) {
                res(`Success: "${str1}" it is long world.`)
            } else {
                rej(`Error: "${str1}" it is small word.`)
            }
        }, 31557600000)  // 1 year
    })
    .then((res => console.log(res)))
    .catch((rej => console.log(rej)))
}

workingOnPromise("Hi")
workingOnPromise("Petre")
workingOnPromise("Sikmashvili")