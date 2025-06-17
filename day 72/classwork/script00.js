// საკლასო დავალება:

// html-ის სტრუქტურაში დაამატეთ ერთი პარაგრაფი, რომელსაც გაუწერთ id-ს.

// js-ში წამოიღეთ ეს პარაგრაფი და მას პირდაპირ გაუწერეთ დაკლიკების მოვლენის მსმენელი და მას გადაეცით ფუნქცია. ამ ფუნქციამ ვებსაიტის ფონის ფერი უნდა გახადოს შავი, ტექსტის ფერი თეთრი და textAlign გაუტოლოს center-ს.

let p = document.getElementById("p1");

p.onclick = function() {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    document.getElementById("p1").style.textAlign = "center";
}
