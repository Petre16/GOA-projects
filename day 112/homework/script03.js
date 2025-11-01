const form = document.getElementById("userForm")

const saved = JSON.parse(localStorage.getItem("formData")) || {}
if (saved.name) document.getElementById("name").value = saved.name
if (saved.email) document.getElementById("email").value = saved.email
if (saved.message) document.getElementById("message").value = saved.message

form.addEventListener("input", function() {
    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    }
    localStorage.setItem("formData", JSON.stringify(formData))
})