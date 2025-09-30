// საკლასო დავალება:

// შეადგინეთ executor ფუნქცია, რომელსაც ექნება 2 პარამეტრი - resolve, reject. 

// ამ ფუნქციის კოდის ბლოკში, თუ ჩემი სახელის სიგრძე მეტი იქნება 4-ზე, მოახდინეთ resolve და მას არგუმენტად გაუწერეთ "resolved", ხოლო სხვა შემთხვევაში გამოიძახეთ reject და არგუმენტად გაუწერეთ "rejected"

const executor = (resolve, reject) => {
    const name1 = "Petre"

    if (name1.length > 4) {
        resolve("resolved")
    } else {
        reject("rejected")
    }
}

const name2 = new Promise(executor)
console.log(name2)

// საკლასო დავალება:

// Create a loop that schedules logs of numbers 1–5, each with a 1-second delay between them.

for (let i = 1; i <= 5; i++) {
    setTimeout(() => {
        console.log(i)
    }, i * 1000)
}

// საკლასო დავალება:

// Create a Promise that resolves after 3 seconds with the message "Task complete" using setTimeout.

const sT1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Task complete"), 3000)
})