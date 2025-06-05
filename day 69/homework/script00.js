function checkEvenOdd() {
    let num = parseInt(document.getElementById('evenOddNum').value);
    let result = '';
    if (isNaN(num)) {
        result = 'Please enter a number.';
    } else if (num % 2 === 0) {
        result = num + ' is Even.';
    } else {
        result = num + ' is Odd.';
    }
    document.getElementById('evenOddResult').textContent = result;
}

function assignGrade() {
    let score = parseInt(document.getElementById('score').value);
    let grade = '';
    if (isNaN(score)) {
        grade = 'Please enter a score.';
    } else if (score >= 90) {
        grade = 'Grade A';
    } else if (score >= 80) {
        grade = 'Grade B';
    } else if (score >= 70) {
        grade = 'Grade C';
    } else if (score >= 60) {
        grade = 'Grade D';
    } else {
        grade = 'Fail';
    }
    document.getElementById('gradeResult').textContent = grade;
}

function findLargest() {
    let n1 = parseFloat(document.getElementById('num1').value);
    let n2 = parseFloat(document.getElementById('num2').value);
    let n3 = parseFloat(document.getElementById('num3').value);
    let result = '';
    if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
        result = 'Please enter all three numbers.';
    } else if (n1 === n2 && n2 === n3) {
        result = 'All numbers are equal.';
    } else {
    let largest = n1;
    if (n2 > largest) largest = n2;
    if (n3 > largest) largest = n3;
    let equal = [];
    if (n1 === largest) equal.push('Num 1');
    if (n2 === largest) equal.push('Num 2');
    if (n3 === largest) equal.push('Num 3');
    if (equal.length > 1) {
        result = 'Largest numbers are: ' + equal.join(', ') + ' (equal)';
    } else {
        result = 'Largest number is: ' + equal[0];
        }
    }
    document.getElementById('largestResult').textContent = result;
}


function checkVowelConsonant() {
    let char = document.getElementById('charInput').value.toLowerCase();
    let result = '';
    if (!char.match(/^[a-z]$/)) {
        result = 'Please enter a single alphabet character.';
    } else if ('aeiou'.includes(char)) {
        result = char + ' is a vowel.';
    } else {
        result = char + ' is a consonant.';
    }
        document.getElementById('vowelResult').textContent = result;
        }

function checkDivisibility() {
    let num = parseInt(document.getElementById('divNum').value);
    let result = '';
    if (isNaN(num)) {
        result = 'Please enter a number.';
    } else if (num % 3 === 0 && num % 5 === 0) {
        result = 'Divisible by both 3 and 5.';
    } else if (num % 3 === 0) {
        result = 'Divisible by 3 only.';
    } else if (num % 5 === 0) {
        result = 'Divisible by 5 only.';
    } else {
        result = 'Not divisible by 3 or 5.';
    }
    document.getElementById('divResult').textContent = result;
}

function checkAgeCategory() {
    const age = parseInt(document.getElementById('ageInput').value);
    let result = '';
    if (isNaN(age) || age < 0) {
        result = 'Please enter a valid age.';
    } else if (age <= 12) {
        result = 'Child';
    } else if (age <= 19) {
        result = 'Teenager';
    } else if (age <= 59) {
        result = 'Adult';
    } else {
        result = 'Senior';
    }
    document.getElementById('ageResult').textContent = result;
}