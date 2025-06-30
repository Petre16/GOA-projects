// საკლასო დავალება:

// შექმენით 5 ელემენტი ერთი და იგივე კლასით და js-ის კოდით დაბეჭდეთ თითოეულის textContent

const elements = document.querySelectorAll(".element");
elements.forEach(function(el) {
    console.log(el.textContent);
});