// შექმენით 5 ცალი დივი.მიეცით კლასი და გასტილეთ ჯავას სკრიპტით.მიეცით ერთნაიარი ფერი და მოამრგვალეთ კუთხეები.გააკეთეთ ანიმაცია,რომელიც ყველა დივს წაიყვანს მარჯვნივ

let divs = document.getElementsByClassName("divs")
for (let i = 0; i < divs.length; i++) {
    divs[i].style.backgroundColor = "black";
    divs[i].style.borderRadius = "10px";
    divs[i].style.width = "100px";
    divs[i].style.height = "100px";
    divs[i].style.margin = "10px";
}

function moveDivs() {
    for (let i = 0; i < divs.length; i++) {
        divs[i].style.transition = "transform 10s";
        divs[i].style.transform = "translateX(50px)";
    }
}

moveDivs()