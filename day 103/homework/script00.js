const form = document.getElementById("main-form");
const infoSection = document.getElementById("info-section")

class Student{
    constructor(name, surname, age, weight, height, group, email, password){
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.weight = weight;
        this.height = height;
        this.group = group;
        this.email = email;
        this.password = password;
        this.createdAt = null;
    }

    changeTime(){
        const t = new Date();
        this.createdAt = `${t.getFullYear()}-${t.getMonth()}-${t.getDate()}, ${t.getHours()}:${t.getMinutes()}:${t.getSeconds()}`
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const newStudent = new Student(form.elements.name.value, form.elements.surname.value, parseInt(form.elements.age.value), parseInt(form.elements.weight.value), parseInt(form.elements.height.value), parseInt(form.elements.group.value), form.elements.email.value, form.elements.password.value);
    newStudent.changeTime()

    const div = document.createElement("div");
    for (const info in newStudent){
        const p = document.createElement("p");
        p.textContent = newStudent[info];
        div.appendChild(p);
    }

    infoSection.appendChild(div)
});