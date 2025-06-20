//  საკლასო დავალება
// შექმენით ერთი ღილაკი.ღილაკზე დაჭერი დროს დაიწყოს set interval და ღილაკს შეეცვალოს ფერი,რომლებიც იქნებიან მოთავსებულნი სიაში.შეეცვალოს ფერი ხუთჯერ,შემდეგ კი გაითიშოს,ყოველ 2 წამში შეეცვალოს ფერი

let button = document.getElementById("button-1");

let colors = ["red", "green", "blue", "yellow", "purple"];

button.onclick = function() {
    let count = 0;

    setInterval(function() {
        button.style.backgroundColor = colors[count];
        count++;

        if (count === colors.length) {
            clearInterval(intervalId);
        }
    }, 2000);
};