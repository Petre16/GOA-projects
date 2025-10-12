fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response => response.json())
    .then(resolved => console.log(resolved))
    .catch(rejected => console.log(rejected))

fetch("https://goa-api.onrender.com/leaders")
    .then(response => response.json())
    .then(resolved => console.log(resolved))
    .catch(rejected => console.log(rejected))