document.getElementById('alertBtn').addEventListener('click', function() {
    alert('Button was clicked!');
});

let hoverPara = document.getElementById('hoverPara');
let originalText = hoverPara.textContent;
hoverPara.addEventListener('mouseenter', function() {
    hoverPara.textContent = 'Text changed on hover!';
});
hoverPara.addEventListener('mouseleave', function() {
    hoverPara.textContent = originalText;
});

let toggleDiv = document.getElementById('toggleDiv');
let isBlue = true;
toggleDiv.addEventListener('click', function() {
    if (isBlue) {
        toggleDiv.style.backgroundColor = 'lightcoral';
    } else {
        toggleDiv.style.backgroundColor = 'lightblue';
    }
    isBlue = !isBlue;
});

document.getElementById('logInput').addEventListener('click', function(e) {
    console.log('Input value:', e.target.value);
});

let img = document.getElementById('myImage');
document.getElementById('toggleImgBtn').addEventListener('click', function() {
    if (img.style.display === 'none') {
        img.style.display = 'block';
    } else {
        img.style.display = 'none';
    }
});