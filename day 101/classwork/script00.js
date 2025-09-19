// საკლასო დავალება:

// Date ობიექტის გამოყენებით დაბეჭდეთ ახლანდელი დრო სთრინგის სახით. ასევე დაბეჭდეთ Date ობიექტიდან მიღებული ახალი ობიექტი (გამოიყენეთ new keyword). ასევე დაბეჭდეთ 1970 წლის 1 იანვრის 00:00:00 საათიდან რამდენი მილიწამია გასული.


const date1 = new Date()
console.log(date1.toString())

const date2 = new Date()
console.log(date2)

const date3 = Date.now()
console.log(date3)

// საკლასო დავალება:

// მომხმარებელს დაუბეჭდეთ ახლა კვირის რომელი დღეა, გამოიყენეთ Date ობიექტი და მისი ერთ-ერთი მეთოდი.

const date4 = new Date()

const date5 = ["კვირა", "ორშაბათი", "სამშაბათი", "ოთხშაბათი", "ხუთშაბათი", "პარასკევი", "შაბათი"]

const date6 = date4.getDay()

console.log(date5[date6])

// საკლასო დავალება:

// ტერმინალში დაბეჭდეთ ახლანდელი დრო 10 წამის განმავლობაში, შემდეგ ფორმატში: საათი:წუთი:წამი.

let counter = 0;

const myInterval = setInterval(() => {
    counter++

    const date = new Date();
    console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);

    if (counter === 9) {
        clearInterval(myInterval);
    }
    
    counter++;
}, 1000);