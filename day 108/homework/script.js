fetch("https://jsonplaceholder.com/")
    .then(res => res.json())
    .then(result => console.log(result))


fetch("https://goa-api.onrender.com/leaders")
    .then(res => res.json())
    .then(result => console.log(result))