import { useContext } from "react";
import { StudentsContext } from "../context/StudentsContext.jsx";

const Students = () => {
    const students = useContext(StudentsContext);

    return (
        <div>
            <ul>
                {
                    students.map((el, i) => (
                        <li key={i}>
                            <p>{el}</p>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default Students;