// საკლასო დავალება:

// Write a function that takes an object and returns the total number of keys in it.

const counKeys = myObj => {
    return Object.keys(myObj).length;
}

const student = {
    name: "Petre",
    age: 11,
    grade: 6
};

console.log(counKeys(student))