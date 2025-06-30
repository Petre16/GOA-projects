let pTags = document.querySelectorAll("p");
alert("Number of <p> tags: " + pTags.length);

let h2Tags = document.querySelectorAll("h2");
h2Tags.forEach(h2 => {
    h2.style.color = "blue";
});

let liTags = document.querySelectorAll("li");
liTags.forEach(li => {
    console.log(li.textContent);
});

let divTags = document.querySelectorAll("div");
divTags.forEach(div => {
    div.style.backgroundColor = "lightgray";
});

let firstImg = document.querySelector("img");
if (firstImg) {
    firstImg.src = "image.png";
}

let highlights = document.querySelectorAll(".highlight");
highlights.forEach(el => {
    el.style.backgroundColor = "yellow";
});

let cards = document.querySelectorAll(".card");
console.log("Number of .card elements: " + cards.length);

let errors = document.querySelectorAll(".error");
errors.forEach(el => {
    el.style.color = "red";
});

let items = document.querySelectorAll(".item");
items.forEach(el => {
    console.log(el.innerHTML);
});

let firstButton = document.querySelector(".button");
if (firstButton) {
    firstButton.textContent = "Clicked!";
}