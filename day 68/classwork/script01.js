// საკლასო დავალება:

// შეცვალეთ მოცემული კოდი ისე, რომ ასაკებზე გამოქონდეს შემდეგი წინადადებები:

// 0-18 - not adult
// 18-65 - adult & not old
// 65-113 - retired
// 113+ - lie


function forConditions(){
    let userNum = Number(prompt("Enter number:"));

    if (userNum < 18) {
        console.log("You are not adult");
    } else if (userNum < 65) {
        console.log("You are adult & not old");
    } else if (userNum < 113) {
        console.log("You are retired")
    } else {
        console.log("You are lying");
    }


}