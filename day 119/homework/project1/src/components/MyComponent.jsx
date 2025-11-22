const MyComponent = ({studentsArr}) => {
    console.log(studentsArr)

    return (
        <ul>
            {
                studentsArr.map(stO => (
                    <li>
                        <p>Name</p> {stO.name}

                        <br />

                        <p>Surname</p> {stO.surname}

                        <br />

                        <p>City</p> {stO.city}
                    </li>
                ))
            }
        </ul>
    )
};

export default MyComponent;