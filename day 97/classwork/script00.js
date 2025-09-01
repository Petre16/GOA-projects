// საკლასო დავალება:

// Given an array of 5 names, use forEach to print a greeting message for each name.

// message: "Hello, {name}!"

const list1 = ["Petre", "Giorgi", "Davit", "Nika", "Natia"]

list1.forEach((names) => {
    console.log(`Hello, ${names}!`)
})

// საკლასო დავალება:

// Given an array of prices, use map to apply a 10% discount to each price and return the discounted array

const price1 = [231, 123, 400, 700, 500]

const str1 = price1.map(price2 => price2 * 0.9)
console.log(str1);

// საკლასო დავალება:

// Use map to transform an array of email addresses into an array of usernames (the part before "@").

// alex.morgan92@example.com

// sophie_williams07@testmail.com

// daniel.lee88@webmail.net

// chris.johnson54@myinbox.org

// emma.jackson23@mailbox.co

// ryan_taylor77@fastmail.io

// natalie.green11@postmail.net

// michael.brown45@inboxhub.com

// olivia.smith29@cloudmail.org

// james_wilson63@netmail.co

const emails = [
    "alex.morgan92@example.com",
    "sophie_williams07@testmail.com",
    "daniel.lee88@webmail.net",
    "chris.johnson54@myinbox.org",
    "emma.jackson23@mailbox.co",
    "ryan_taylor77@fastmail.io",
    "natalie.green11@postmail.net",
    "michael.brown45@inboxhub.com",
    "olivia.smith29@cloudmail.org",
    "james_wilson63@netmail.co"
]

const str2 = emails.map(email => email.split("@")[0])

console.log(str2)