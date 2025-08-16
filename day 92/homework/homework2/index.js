const form = document.getElementById("form-1");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const info = document.getElementById("input-1").value;
    
    if (info === ""){
        document.getElementById("label-1").style.display = "block"
        document.getElementById("input-1").style.borderColor = "hsl(0, 93%, 68%)"
    } else {
        document.getElementById("label-1").style.display = "none"
        document.getElementById("input-1").style.borderColor = "hsl(0, 36%, 70%)"
    }
})