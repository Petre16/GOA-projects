const asyncU = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const todos = await response.json()
    console.log(todos)
}

asyncU()