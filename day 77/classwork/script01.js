// შექმენით ღილაკი და ერთი დივი.ღილაკზე დაჭერის დროს,დივმა უნდა შეიცვალოს ფერი ხუჯერ,10 წამის მანძილზე + რამდენჯერაც ღილაკს დააჭერს ხელს,იმდენჯერ გადავიდეს დივი მარჯვნივ 10 პიქსელით

const button = document.getElementById("btn");
const div = document.getElementById("div");
let move = 0;
let colorInterval = null;

button.addEventListener("click", function () {
    move += 10;
div.style.left = move + "px";

if (colorInterval !== null) {
    clearInterval(colorInterval);
}

let secondsPassed = 0;
colorInterval = setInterval(() => {
    div.style.backgroundColor = "red";
    secondsPassed++;

    if (secondsPassed >= 10) {
    clearInterval(colorInterval);
    colorInterval = null;
    div.style.backgroundColor = "lightblue";
    }
}, 1000);
});