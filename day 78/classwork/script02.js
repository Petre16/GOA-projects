// საკლასო დავალება:

// შექმენით მასივი, სადაც გექნებათ 2 სთრინგი, 2 რიცხვი და 2 ბულეანი.
// მასივს გადაუარეთ for of ციკლით. თითოეულ იტერაციაზე შეამოწმეთ მასივის ელემენტის მონაცემთა ტიპი. თუ ის სთრინგია, უბრალოდ დაბეჭდეთ. თუ ის რიცხვია, დაბეჭდეთ მასზე 10-ით მეტი რიცხვი. ხოლო, თუ ის ბულეანია, დაბეჭდეთ მისი საწინააღმდეგო ბულეანი.

const mixed = ["Petre", "Sikmashvili", 13, 432, true, false]

for (const item of mixed) {
    if (typeof item === "string") {
        console.log(item);
    } else if (typeof item === "number") {
        console.log(item + 10);
    } else if (typeof item === "boolean") {
        console.log(!item);
    }
}