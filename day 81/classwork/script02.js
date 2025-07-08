// საკლასო დავალება:

// შექმენით ფუნქცია function keyword-ის გამოყენებით. ამ ფუნქციას გაუწერეთ 10 პარამეტრი. for of ციკლის გამოყენებით გადაუარეთ 10-ვე პარამეტრს. თუ პარამეტრის მნიშვნელობა იქნება რიცხვი, მაშინ დაბეჭდეთ ის. ხოლო თუ სთრინგი იქნება, ეს მნიშვნელობა შეცვალეთ და მასში შეინახეთ რიცხვი 1.

// ფუნქცია გამოიძახეთ ერთხელ და ნახეთ კოდის შედეგი

function checkParams(a, b, c, d, e, f, g, h, i, j) {
    let params = [a, b, c, d, e, f, g, h, i, j];

    for (let value of params) {
        if (typeof value === "number") {
            console.log(value);
        } else if (typeof value === "string") {
            value = 1;
            console.log(value);
        }
    }
}

checkParams(5, "hello", 12, "world", 7, "abc", 9, true, "text", 3);