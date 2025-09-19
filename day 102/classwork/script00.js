// საკლასო დავალება:

// html-ის დოკუმენტში ჩაამატეთ ერთი პარაგრაფი და ერთი ღილაკი. როდესაც მომხარებელი დააკლიკებს ღილაკს, პარაგრაფში უნდა აჩვენოთ ახლანდელი დრო, შემდეგ ფორმატში: "წელი-თვე-დღე, საათი-წუთი-წამი".

const p1 = document.getElementById("p1")
const btn1 = document.getElementById("btn1")

btn1.addEventListener("click", () => {
    const date1 = new Date()

    p1.textContent = `${date1.getFullYear()}-${date1.getMonth() + 1}-${date1.getDate()}, ${date1.getHours()}-${date1.getMinutes()}-${date1.getSeconds()}`
})


// საკლასო დავალება:

// შექმენით ობიექტი, სადაც გექნებათ 5 წყვილი.

// დაბეჭდეთ მთლიანად ობიექტი, შემდეგ დაბეჭდეთ თითოეული გასაღების მნიშვნელობა.

const obj1 = {
    name: "Petre",
    surname: "Sikmashvili",
    age: "11",
    profession: "Programmer",
    city: "Tbilisi"
}

console.log(obj1)
console.log(obj1.name)
console.log(obj1.surname)
console.log(obj1.age)
console.log(obj1.profession)
console.log(obj1.city)