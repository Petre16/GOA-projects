// საკლასო დავალება:

// ვებსაიტზე დაამატეთ ერთი პარაგრაფი, რომლის საწყისი ფონტის ზომა იქნება 10 პიქსელი. პარაგრაფის ქვემოთ დაამატეთ ერთი ღილაკი.

// როდესაც მომხმარებელი დააკლიკებს ღილაკს, უნდა გაეშვას ფუნქცია. ამ ფუნქციამ, ყოველ 1 წამში, პარაგრაფის ფონტის ზომა 1 პიქსელით უნდა გაზარდოს.

const paragraph = document.getElementById("p1");
const button = document.getElementById("button-1");

button.addEventListener("click", () => {
    setInterval(() => {
        let currentSize = parseInt(paragraph.style.fontSize);
        paragraph.style.fontSize = (currentSize + 1) + "px";
    }, 1000);
});