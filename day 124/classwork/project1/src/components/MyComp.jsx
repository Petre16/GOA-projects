const Obj = [
    {username: "Petre", userage: 12},
    {username: "David", userage: 12},
    {username: "Giorgi", userage: 12},
]

const MyComp = () => {
    return (
        <>
            <ul>
                {Obj.map((el, index) => (
                <li key={index}>
                    <p>{el.username}</p>
                    <p>{el.userage}</p>
                </li>
            ))}
            </ul>
        </>
    )
}

export default MyComp;