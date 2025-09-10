// საკლასო დავალება:

// html-ის სტრუქტურაში ჩაამატეთ ერთი პარაგრაფი და ერთი ღილაკი. ორივე ელემენტი წამოიღეთ js-ში. 

// როდესაც მომხმარებელი დააკლიკებს ღილაკს, უნდა გაეშვას chooseRandomColor ფუნქცია და ამ ფუნქციის დაბრუნებული ფერი გაეწეროს ტექსტის ფერად პარაგრაფს.

// chooseRandomColor:
// გადაეცით მასივი, სადაც იქნება 5 განსხვავებული ფერი. აარჩიეთ random ფერი მასივიდან და ეს ფერი გაუწერეთ პარაგრაფს color კუთვნილებაში.

const p1 = document.getElementById("p1")
const btn1 = document.getElementById("btn1")

    function chooseRandomColor(colors) {
        const randomIndex = Math.floor(Math.random() * colors.length)
        return colors[randomIndex]
    }

    button.addEventListener("click", function () {
        const colors = ["yellow", "orange", "red", "blue", "dark blue"]
        const randomColor = chooseRandomColor(colors)
        paragraph.style.color = randomColor
    })