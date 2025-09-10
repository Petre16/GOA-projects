const str1 = [
    "GOA BEST!",
    "LEVEL 100!",
    "Hello World!",
    "Petre Sikmashvili",
    "GOA"
]

const str2 = [
    "red", "orange", "yellow", "green", "cyan", "blue", "purple"
]

const p1 = document.getElementById("p1")
const btn1 = document.getElementById("btn1")

function randomIndex(arr1) {
    return Math.floor(Math.random() * arr1.length)
}

function randomQuote1() {
    const randomQuote2 = str1[randomIndex(str1)]
    p1.textContent = randomQuote2

    const randomColor = str2[randomIndex(str2)]
    document.body.style.backgroundColor = randomColor
}

btn1.addEventListener("click", randomQuote1)