let visits = localStorage.getItem("visits")

if (visits) {
    visits = Number(visits) + 1
} else {
    visits = 1
}

localStorage.setItem("visits", visits)
document.getElementById("count").textContent = visits