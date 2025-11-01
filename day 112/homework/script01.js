const body = document.body
const button = document.getElementById("toggleTheme")

const savedTheme = localStorage.getItem("theme") || "light"
body.style.backgroundColor = savedTheme === "dark" ? "black" : "white"
body.style.color = savedTheme === "dark" ? "white" : "black"

button.addEventListener("click", function() {
    const currentTheme = localStorage.getItem("theme") || "light"
    const newTheme = currentTheme === "light" ? "dark" : "light"
    localStorage.setItem("theme", newTheme)

    body.style.backgroundColor = newTheme === "dark" ? "black" : "white"
    body.style.color = newTheme === "dark" ? "white" : "black"
})