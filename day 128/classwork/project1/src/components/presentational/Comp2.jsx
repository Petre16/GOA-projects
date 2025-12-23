const Comp2 = ({count, decrease}) => {
    return (
        <>
            <p>{count}</p>
            <button onClick={decrease}>-1</button>
        </>
    )
}

export default Comp2;