// საკლასო დავალება:

// შექმენით ფუნქცია სახელად logicalFunc, რომელსაც ექნება ორი პარამეტრი - bool1, bool2. ფუნქციამ უნდა დაბეჭდოს ამ ორ პარამეტრს შორის ან და და ლოგიკური ოპერაციების შედეგები.

// ფუნქცია გამოიძახეთ 3-ჯერ და გადაეცით განსხვავებული არგუმენტი

function logicalFunc(bool1, bool2) {
    console.log(bool1 && bool2);
    console.log(bool1 || bool2);
}

logicalFunc(true, true);
logicalFunc(true, false);
logicalFunc(false, false)