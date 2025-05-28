document.getElementById('colorForm').addEventListener('submit', function(e) {
    e.preventDefault();
    document.body.style.backgroundColor = document.getElementById('colorInput').value;
});

document.getElementById('showNameBtn').addEventListener('click', function() {
    let first = document.getElementById('firstName').value;
    let last = document.getElementById('lastName').value;
    document.getElementById('fullName').textContent = first + ' ' + last;
});