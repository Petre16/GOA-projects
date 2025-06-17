let contentDiv = document.getElementById('content');
if (contentDiv.firstElementChild) {
    contentDiv.removeChild(contentDiv.firstElementChild);
}

let ul = document.getElementById('myList');
if (ul.lastElementChild) {
    ul.removeChild(ul.lastElementChild);
}

let textContainer = document.getElementById('textContainer');
let newP = document.createElement('p');
newP.textContent = 'New paragraph';
let oldP = textContainer.querySelector('p');
if (oldP) {
    textContainer.replaceChild(newP, oldP);
}

let buttonContainer = document.getElementById('buttonContainer');
let newSpan = document.createElement('span');
newSpan.textContent = 'New Span';
let oldButton = buttonContainer.querySelector('button');
if (oldButton) {
    buttonContainer.replaceChild(newSpan, oldButton);
}

let singleList = document.getElementById('singleList');
let newLi = document.createElement('li');
newLi.textContent = 'New item';
let oldLi = singleList.querySelector('li');
if (oldLi) {
    singleList.replaceChild(newLi, oldLi);
}

let oldH2 = document.getElementById('header');
let newH1 = document.createElement('h1');
newH1.textContent = 'New Heading';
if (oldH2 && oldH2.parentNode) {
    oldH2.parentNode.replaceChild(newH1, oldH2);
}