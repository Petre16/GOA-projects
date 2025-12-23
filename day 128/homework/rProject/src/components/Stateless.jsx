const Stateless = () => {
    return (
        <div style={{
            backgroundColor: "#1F1F1F",
            height: "100vh",
            width: "100wh"
        }}>
            <h1 style={{
                color: "darkblue",
                textAlign: "center"
            }}>Welcome</h1>

            <hr />

            <h3 style={{
                color: "darkgrey"
            }}>I am Petre Sikmashvili</h3>

            <p style={{
                color: "gold"
            }}>My favourite color is yellow</p>
            <br />
            <button style={{
                border: "none",
                borderRadius: "10px",
                padding: "15px",
                backgroundColor: "blue",
                color: "yellow"
            }}>Click me</button>
        </div>
    )
}

export default Stateless;