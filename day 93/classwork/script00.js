// საკლასო დავალება:

// მომხმარებელს ჯერ შემოატანინეთ საწყისი სთრინგი, შემდეგ შესაცვლელი ნაწილი და ბოლოს რითი უნდა შეცვალოს. შემდეგ შეეკითხეთ მხოლოდ ერთხელ უნდა შეცვლა და ყველა შემხვედრზე.

// თუ ის ერთს აირჩევს, გამოიყენეთ replace მეთოდი საწყის სთრინგზე, ხოლო სხვა შემთხვევაში replaceAll მეთოდი. საბოლოოდ კი კონსოლში დაბეჭდეთ მიღებული შედეგი.

let str1 = prompt("Enter string: ");
let str2 = prompt("Enter the part to be replaced: ");
let str3 = prompt("Enter what you want to replace: ");
let str4 = prompt("Change only once?: ");

let result;
if (str4.toLowerCase() === "yes") {
    result = str1.replace(toReplace, replacement);
} else {
    result = str1.replaceAll(toReplace, replacement);
}

console.log(result);