// საკლასო დავალება:

// შექმენით ანონიმური ფუნქცია function keyword-ის გამოყენებით და შეინახეთ ის ცვლადში. ამ ფუნქციამ უბრალოდ უნდა დაბეჭდოს ობიექტის ყველა მნიშნელობა.

// გამოიძახეთ ფუნქცია და დაბეჭდეთ მისი შედეგი.

const logValues = function () {
    let object = {
        name: "Petre",
        surname: "Sikmashvili",
    };

    for (const key in myObj) {
        console.log(myObj[key]);
    }
};

logValues();