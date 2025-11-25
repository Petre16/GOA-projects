const Info = ({signedIn, myName, mySurname}) => {
    return (
        <>
            {
                signedIn == true ? (
                    <p>{myName}</p>
                ) : (
                    <p>{mySurname}</p>
            )
            }
        </>
    )
}

export default Info;