// საკლასო დავალება:

// prompt-ით მომხმარებელს შემოატანინეთ ნებისმიერი სიტყვა და ეს სიტყვა შეინახეთ localStorage-ში.

// შემდეგ, localStorage-დან წამოიღეთ ეს სიტყვა და ის textContent-ად გაუწერეთ პარაგრაფს. 

// როდესაც ვებსაიტი დარეფრეშდება და localStorage-ში ინფორმაცია უკვე გექნებათ შენახული, პარაგრაფის textContent უნდა იყოს localStorage-ში ბოლოს შენახული


const p = document.getElementById("p1")
const savedWord = localStorage.getItem("word")

if (savedWord) {
    p.textContent = savedWord
} else {
    const userWord = prompt("Enter word:")
    if (userWord) {
        localStorage.setItem("word", userWord)
        p.textContent = userWord
    } else {
        p.textContent = ""
    }
}