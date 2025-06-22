// საკლასო დავალება:

// ვებსაიტზე დაამატეთ ერთი დივ ბლოკი და მასში მოათავსეთ სამი პარაგრაფი. დივ ბლოკის გარეთ აიღეთ 2 პარაგრაფი.

// sj-ში წამოიღეთ დივ ბლოკი და getElementsByTagName მეთოდის გამოყენებით, კონსტანტაში შეინახეთ ამ დივ ბლოკში არსებული ყველა პარაგრაფი. შემდეგ, ციკლით გადაურეთ დივ ბლოკს და მის თითოეულ ელემენტს ტექსტის ფერი გაუწერეთ მწვანე, ასევე ფონის ფერი გაუწერეთ შავი

const div = document.getElementById("div1");

const paragraphs = div.getElementsByTagName("p");

for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "green";
    paragraphs[i].style.backgroundColor = "black";
}