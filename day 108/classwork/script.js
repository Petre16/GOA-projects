// საკლასო დავალება:

// შექმენით ფუნქცია, რომელსაც ერთი სთრინგი გადაეცემა. ამ ფუნქციამ უნდა დააბრუნოს promise. თუ სთრინგის სიგრძე ლუწია, promise-მა უნდა მოახდინოს resolve და მისი არგუმენტი იყოს თვითონ სთრინგი. ხოლო, თუ სთრინგის სიგრძე კენტია, promise-მა უნდა მოახდინოს reject და არგუმენტად ისევ სთრინგი გადაეცით.

// ფუნქცია უნდა იყოს ასინქრონული, ამიტომ მასში ჩააშენეთ setTimeout და დროს იყოს 2 წამი.

// გამოიძახეთ Promise.all მეთოდი, მას არგუმენტად გადაეცით მასივი, სადაც იქნება 3 promise თქვენს მიერ შექმნილი ფუნქციიდან. 

// Promise.all-ის მიერ დაბრუნებულ promise-ზე უნდა გაწეროთ როგორც then მეთოდი, ასევე catch მეთოდი. ორივე მეთოდში დაბეჭდეთ დაბრუნებული ინფორმაცია.


const stringLength = (str) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            if (str.length % 2 === 0) {
                res(str)
            } else {
                rej(str)
            }
        }, 2000)
    })
}

const promise1 = stringLength("Petre")
const promise2 = stringLength("Giorgi")
const promise3 = stringLength("Sam")

const promises = Promise.all([promise1, promise2, promise3])

promises
    .then(results => {
        console.log("resolve")
        console.log(results)
    })
    .catch(error => {
        console.log("reject")
        console.log(error)
    })


// საკლასო დავალება:

// შედით მოცემულ საიტზე, აირჩიეთ ნებისმიერი ლინკი. შემდეგ, js-ის ფაილში გამოიძახეთ fetch ფუნქცია, მას გადაეცით თქვენი ლინკი არგუმენტად და დაბრუნებული ინფორმაცია გადაიყვანეთ json ფორმატში .json() მეთოდის გამოყენებით. საბოლოოდ კი დაბეჭდეთ ეს ინფორმაცია.

// https://goa-api.vercel.app/

fetch("https://goa-api.onrender.com/leaders/salary")
    .then(res => res.json())
    .then(result => console.log(result))