let body = document.body;

let btn = document.createElement("button");
btn.textContent = "click me";

let div = document.createElement("div");
div.style.backgroundColor = "red";
div.style.width = "300px";
div.style.height = "300px";
div.style.marginTop = "20px";

body.appendChild(btn);
body.appendChild(div);

let counter = 1;

btn.addEventListener("click", function() {
    let width = 300;
    let height = 300;

    let interval = setInterval(function() {
        let p = document.createElement("p");
        let pText = document.createTextNode("p" + counter);
        p.appendChild(pText);
        body.appendChild(p);

        counter++;

        width -= 10;
        height -= 10;
        div.style.width = width + "px";
        div.style.height = height + "px";

        if (width <= 0 || height <= 0) {
            clearInterval(interval);
            div.style.display = "none";
        }
    }, 3000);
});
