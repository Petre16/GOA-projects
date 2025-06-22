const pTags = document.querySelectorAll('p');
alert('Total <p> tags: ' + pTags.length);

document.querySelectorAll('h2').forEach(h2 => h2.style.color = 'blue');

document.querySelectorAll('li').forEach(li => console.log(li.textContent));

document.querySelectorAll('div').forEach(div => div.style.backgroundColor = 'lightgray');

const firstImg = document.querySelector('img');
if (firstImg) firstImg.src = 'https://via.placeholder.com/150/0000FF/FFFFFF?text=New+Image';

document.querySelectorAll('.highlight').forEach(el => el.style.backgroundColor = 'yellow');

const cardCount = document.querySelectorAll('.card').length;
console.log('Number of .card elements:', cardCount);

document.querySelectorAll('.error').forEach(el => el.style.color = 'red');

document.querySelectorAll('.item').forEach(el => console.log(el.innerHTML));

const firstButton = document.querySelector('.button');
if (firstButton) firstButton.textContent = 'Clicked!';

const movingDiv = document.getElementById('movingDiv');
let left = 0;
setInterval(() => {
    left += 5;
    movingDiv.style.left = left + 'px';
}, 100);