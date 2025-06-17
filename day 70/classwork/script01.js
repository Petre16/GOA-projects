// საკლასო დავალება:

// html-ში დაამატეთ ერთი ინფუთი, რომელსაც გაუწერთ id-ის. როდესაც ფორმა დადასტურდება, გაუშვით ფუნქცია, რომელიც წამოიღებს ამ ინფუთის value-ს. თუ value იქნება "true", alert-ით გამოიტანეთ "logged in", სხვა შემთხვევაში alert-ით გამოიტანეთ "try again"

function checkLogin() {
    let value = document.getElementById("loginInput").value;
    if (value === "true") {
        alert("logged in");
    } else {
        alert("try again");
    }
}