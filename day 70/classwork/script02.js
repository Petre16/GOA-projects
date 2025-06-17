// საკლასო დავალება:

// სტრუქტურაში დაამატეთ ერთი ფორმა, სადაც იქნება ორი ინფუთი - პირველი ფერისთვის და მეორე ფონის ფერისთვის.

// როდესაც ფორმა დადასტურდება, გაუშვით js-ის ფუნქცია. ამ ფუნქციამ ვებსაიტის ტექსტის ფერი უნდა გახადოს პირველი ინფუთის მნიშვნელობა და ფონის ფერი მეორე ინფუთის მნიშვნელობა.

function changeColors() {
    let textColor = document.getElementById("textColorInput").value;
    let bgColor = document.getElementById("bgColorInput").value;

    document.body.style.color = textColor;
    document.body.style.backgroundColor = bgColor;
}