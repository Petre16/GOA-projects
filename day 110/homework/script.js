// 2
async function fetchUserData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const users = await response.json()
    users.forEach(user => {
        console.log(user.name)
    })
}

// 3
async function fetchInvalidAPI() {
    try {
        const response = await fetch("https://invalidapi.typicode.com/data")
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log("Custom Error: Failed to fetch data from the API")
    }
}

// 4
async function fetchWithRetry(url, retries = 3) {
    for (let attempt = 1; attempt <= retries; attempt++) {
        try {
            const response = await fetch(url)
            if (!response.ok) throw new Error("Network response was not ok")
            const data = await response.json()
            return data
        } catch (error) {
            console.log("Attempt " + attempt + " failed")
            if (attempt === retries) {
                throw new Error("Failed after 3 retries")
            }
        }
    }
}

// 5
async function fetchPostsAndAuthor() {
    const postsResponse = await fetch("https://jsonplaceholder.typicode.com/posts")
    const posts = await postsResponse.json()
    const firstPost = posts[0]

    const userResponse = await fetch("https://jsonplaceholder.typicode.com/users/" + firstPost.userId)
    const user = await userResponse.json()

    console.log("Post Title: " + firstPost.title)
    console.log("Author Name: " + user.name)
}

// Run all functions one after another
async function runAll() {
    await fetchUserData()
    await fetchInvalidAPI()
    const data = await fetchWithRetry("https://jsonplaceholder.typicode.com/users")
    console.log("Fetched with retry: " + data.length + " users")
    await fetchPostsAndAuthor()
}

runAll()
