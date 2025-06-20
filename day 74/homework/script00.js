const paragraph = document.getElementById('text-paragraph');
const changeTextBtn = document.getElementById('change-text-btn');
changeTextBtn.addEventListener('click', function () {
    paragraph.textContent = "New text!";
});

let bgInterval = setInterval(() => {
    document.body.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
}, 2000);
document.getElementById('stop-bg-btn').onclick = () => clearInterval(bgInterval);

const nameInput = document.getElementById('name-input');
const addNameBtn = document.getElementById('add-name-btn');
const namesList = document.getElementById('names-list');
addNameBtn.addEventListener('click', () => {
    if (nameInput.value.trim()) {
        const li = document.createElement('li');
        li.textContent = nameInput.value;
        namesList.appendChild(li);
        nameInput.value = '';
    }
});

function updateClock() {
    const now = new Date();
    const h = String(now.getHours()).padStart(2, '0');
    const m = String(now.getMinutes()).padStart(2, '0');
    const s = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('clock').textContent = `${h}:${m}:${s}`;
}
setInterval(updateClock, 1000);
updateClock();

const colors = ['#FF5733', '#33FF57', '#3357FF', '#F3FF33', '#FF33F6'];
let colorIdx = 0;
document.getElementById('color-cycle-btn').addEventListener('click', () => {
    document.body.style.backgroundColor = colors[colorIdx];
    colorIdx = (colorIdx + 1) % colors.length;
});

const boxCountInput = document.getElementById('box-count');
const createBoxesBtn = document.getElementById('create-boxes-btn');
const boxesContainer = document.getElementById('boxes-container');
createBoxesBtn.addEventListener('click', () => {
    boxesContainer.innerHTML = '';
    const count = parseInt(boxCountInput.value);
    if (count > 0) {
        for (let i = 0; i < count; i++) {
            const div = document.createElement('div');
            div.className = 'box';
            div.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
            boxesContainer.appendChild(div);
        }
    }
});

let timerInterval;
document.getElementById('start-timer-btn').addEventListener('click', () => {
    clearInterval(timerInterval);
    let seconds = parseInt(document.getElementById('timer-seconds').value);
    const display = document.getElementById('timer-display');
    if (isNaN(seconds) || seconds < 1) return;
    display.textContent = seconds;
    timerInterval = setInterval(() => {
        seconds--;
        if (seconds > 0) {
            display.textContent = seconds;
        } else {
            clearInterval(timerInterval);
            display.textContent = "Time's up!";
        }
    }, 1000);
});

const todoInput = document.getElementById('todo-input');
const addTodoBtn = document.getElementById('add-todo-btn');
const todoList = document.getElementById('todo-list');
let todos = [];
function renderTodos() {
    todoList.innerHTML = '';
    todos.forEach((task, idx) => {
        const li = document.createElement('li');
        li.className = 'todo-item';
        li.textContent = task;
        const delBtn = document.createElement('button');
        delBtn.textContent = 'Delete';
        delBtn.onclick = () => {
            todos.splice(idx, 1);
            renderTodos();
        };
        li.appendChild(delBtn);
        todoList.appendChild(li);
    });
}
addTodoBtn.addEventListener('click', () => {
    if (todoInput.value.trim()) {
        todos.push(todoInput.value);
        todoInput.value = '';
        renderTodos();
    }
});

const sentences = [
    "The quick brown fox jumps over the lazy dog.",
    "JavaScript is a versatile programming language.",
    "Practice makes perfect.",
    "Hello world!",
    "Typing speed tests are fun."
];
let typingStart, typingSentence;
const typingSentenceDiv = document.getElementById('typing-sentence');
const typingInput = document.getElementById('typing-input');
const typingResult = document.getElementById('typing-result');
document.getElementById('start-typing-btn').addEventListener('click', () => {
    typingSentence = sentences[Math.floor(Math.random() * sentences.length)];
    typingSentenceDiv.textContent = typingSentence;
    typingInput.value = '';
    typingInput.disabled = false;
    typingInput.focus();
    typingResult.textContent = '';
    typingStart = Date.now();
});
typingInput.addEventListener('input', () => {
    if (typingInput.value === typingSentence) {
        const timeTaken = (Date.now() - typingStart) / 1000;
        const words = typingSentence.split(' ').length;
        const wpm = Math.round((words / timeTaken) * 60);
        typingResult.textContent = `Time: ${timeTaken.toFixed(2)}s, WPM: ${wpm}`;
        typingInput.disabled = true;
    }
});

const images = [
    'https://placekitten.com/200/150',
    'https://placebear.com/200/150',
    'https://placeimg.com/200/150/nature',
    'https://placeimg.com/200/150/tech',
    'https://placeimg.com/200/150/arch'
];
let imgIdx = 0;
const sliderImg = document.getElementById('slider-img');
function showImg() {
    sliderImg.src = images[imgIdx];
}
document.getElementById('prev-img-btn').addEventListener('click', () => {
    imgIdx = (imgIdx - 1 + images.length) % images.length;
    showImg();
});
document.getElementById('next-img-btn').addEventListener('click', () => {
    imgIdx = (imgIdx + 1) % images.length;
    showImg();
});
setInterval(() => {
    imgIdx = (imgIdx + 1) % images.length;
    showImg();
}, 3000);
showImg();