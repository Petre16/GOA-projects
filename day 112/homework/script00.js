const savedName = localStorage.getItem("name")

if (!savedName) {
    const userName = prompt("Enter your name:")
    if (userName) {
        localStorage.setItem("name", userName)
    }
}

const nameInput = document.getElementById("nameInput")
const fbInput = document.getElementById("fbInput")
const emailInput = document.getElementById("emailInput")
const passwordInput = document.getElementById("passwordInput")

const pvName = document.getElementById("pvName")
const pvFb = document.getElementById("pvFb")
const pvEmail = document.getElementById("pvEmail")
const pvPass = document.getElementById("pvPass")

nameInput.value = localStorage.getItem("name") || ""
fbInput.value = localStorage.getItem("facebook") || ""
emailInput.value = localStorage.getItem("email") || ""
passwordInput.value = localStorage.getItem("password") || ""

function updatePreview() {
    pvName.textContent = nameInput.value || "N/A"
    pvFb.textContent = fbInput.value || "N/A"
    pvEmail.textContent = emailInput.value || "N/A"
    pvPass.textContent = passwordInput.value || "N/A"
}

function saveData(key, value) {
    localStorage.setItem(key, value)
    updatePreview()
}

nameInput.addEventListener("input", () => saveData("name", nameInput.value))
fbInput.addEventListener("input", () => saveData("facebook", fbInput.value))
emailInput.addEventListener("input", () => saveData("email", emailInput.value))
passwordInput.addEventListener("input", () => saveData("password", passwordInput.value))

updatePreview()