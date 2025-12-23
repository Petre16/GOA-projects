import { useState, useEffect } from "react";

const App = () => {
  const [users, setUsers] = useState([]);
  const [err, setErr] = useState(false);
  const [errMessage, setErrMessage] = useState("");

  const getRandomColor = () => {
    const colorHexes = [
      "#000000",
      "#262626",
      "#400000",
      "#853200",
      "#C9AA00",
      "#E8E500",
      "#6FEB00",
      "#003D00",
      "#00FFE2",
      "#007BD6",
      "#0039D4",
      "#020029",
      "#6F00FF",
      "#170033"
    ]

    const result = colorHexes[Math.floor(Math.random() * colorHexes.length)]
    return result
  }

  const getData = async (apiLink) => {
    try {
      const res = await fetch(apiLink);
      const final = await res.json();
      setUsers(final)
      setErr(false)
      setErrMessage("")
    } catch (error) {
      setErr(true)
      setErrMessage(error)
    }
  }

  useEffect(() => {
    getData("https://jsonplaceholder.typicode.com/users");
  }, [])

  if (err === true) {
    return <p>Error: {errMessage}</p>
  }

  if (users.length === 0) {
    return <p>Loading...</p>
  }

  return (
    <>
      <ul style={{"width": "100vw", "height": "100vh", "display": "flex", "flexDirection": "column", "justifyContent": "center", "textAlign": "left", "paddingLeft": "35%", "backgroundColor": "#000712"}}>
        {
          users.map((user, i) => (
            <li key={i}
            style={{
                margin: "20px",
                listStyle: "none",
                color: getRandomColor()
              }}
              >
              <h2><b>Name:</b> {user.name}</h2>
              <i><b>Email:</b> {user.email}</i>
            </li>
          ))
        }
      </ul>
    </>
  )
}

export default App;