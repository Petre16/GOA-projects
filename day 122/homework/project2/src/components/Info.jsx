import { useState } from 'react';

const Info = () => {
    const [text, setText] = useState("")

    const handleChange = (e) => {
        setText(e.target.value)
    }

    return (
        <div>
            <form>
                <input type='text' placeholder='Enter Text' onChange={handleChange} value={text}/>
            </form>

            <p>{text}</p>
        </div>
    )
}

export default Info;