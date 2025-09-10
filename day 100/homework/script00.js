// 2-6

function randomNumbers1() {
	console.log(Math.random())
}

randomNumbers1()


function rollDice() {
	console.log(Math.floor(Math.random() * 6) + 1)
}

rollDice()


function headsOrTails() {
	let randomNum1 = Math.random()
	if (randomNum1 < 0.5) {
		console.log("Heads")
	} else {
		console.log("Tails")
	}
}

headsOrTails()


function pasCreate() {
	const chars1 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
	let password = ""
	for (let i = 0; i < 8; i++) {
		let index1 = Math.floor(Math.random() * chars1.length)
		password += chars1[index1]
	}
	console.log(password)
}

pasCreate()


function randomBool() {
	console.log(Math.random() < 0.5)
}

randomBool()

// 7-11

console.log(Math.trunc(12.987))


console.log(Math.trunc(-45.67))


let randomNumbers2 = Math.random() * 100
console.log(Math.trunc(randomNumbers2))


let str1 = "34.89"
console.log(Math.trunc(Number(str1)))


let float1 = [3.14, 7.9, -2.5, 0.99]
let int1 = float1.map(Math.trunc)
console.log(int1)