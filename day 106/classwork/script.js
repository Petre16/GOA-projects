// საკლასო დავალება:

// შექმენით ფუნქცია რომელიც:
//     1. ხუთ ელემენტიანი სთრინგების მასივიდან ირჩევს random სთრინგს.
//     2. 3 წამის შემდეგ ბეჭდავს ამ სთრინგს.


const randomStr = () => {
    const str1 = ["car", "phone", "apple", "book", "chair"]
    const str2 = Math.floor(Math.random() * str1.length)
    const str3 = str1[str2]

    setTimeout(() => {
        console.log(str3)
    }, 3000)
}

randomStr()


// საკლასო დავალება:

// შეადგინეთ ფუნქცია სახელად createPromise. ამ ფუნქციას არგუმენტად გადაეცით ერთი რიცხვი.

// თვითონ ფუნქციამ უნდა დააბრუნოს promise. თუ ფუნქციაში გადაცემული რიცხვი მეტია 10-ზე, მოახდინეთ resolve, ხოლო სხვა შემთხვევაში reject.

// resolve-ის დროს მისი არგუმენტი იყოს "resolve", reject-ის დროს მისი არგუმენტი იყოს "reject"

const createPromise = num1 => {
    return new Promise((resolve, reject) => {
        if (num1 > 10) {
            resolve("resolve")
        } else {
            reject("reject")
        }
    })
}

console.log(createPromise(15))