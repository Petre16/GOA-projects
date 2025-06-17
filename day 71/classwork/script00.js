// საკლასო დავალება:

// html-ის დოკუმენტში ჩაამატეთ ერთი დივ ბლოკი და გაუწერეთ მას id. 

// js-ში შექმენით ფუნქცია სახელად generateParagraph. ამ ფუნქციაში ჯერ წამოიღეთ დივ ბლოკი, შემდეგ შექმენით პარაგრაფი, ამ პარაგრაფს გაუწერეთ თავისი ტექსტი და ბოლოს პარაგრაფი ჩაამატეთ დივ ბლოკში.

// ფუნქცია გამოიძახეთ მაშინ, როდესაც ვებსაიტი ჩაიტვირთება


function generateParagraph() {
    let div = document.getElementById("d1");
    let paragraph = document.createElement("p");
    paragraph.textContent = "paragraph";
    div.appendChild(paragraph);
}

generateParagraph()