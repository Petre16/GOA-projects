const pTags = document.querySelectorAll("p");
alert("Number of <p> tags: " + pTags.length);

const h2s = document.querySelectorAll("h2");
h2s.forEach(h => h.style.color = "blue");

const liItems = document.querySelectorAll("li");
liItems.forEach(li => console.log(li.textContent));

const divs = document.querySelectorAll("div");
divs.forEach(d => d.style.backgroundColor = "lightgray");

const firstImg = document.querySelector("img");
if (firstImg) {
    firstImg.src = "https://picsum.photos/200";
}

const highlights = document.querySelectorAll(".highlight");
highlights.forEach(h => h.style.backgroundColor = "yellow");

const cards = document.querySelectorAll(".card");
console.log("Number of .card elements: " + cards.length);

const errors = document.querySelectorAll(".error");
errors.forEach(e => e.style.color = "red");

const items = document.querySelectorAll(".item");
items.forEach(i => console.log(i.innerHTML));

const firstBtn = document.querySelector(".button");
if (firstBtn) {
    firstBtn.textContent = "Clicked!";
}

let slideBox = document.getElementById("slideBox");
let position = 0;

setInterval(() => {
    position += 5;
    slideBox.style.left = position + "px";
}, 100);