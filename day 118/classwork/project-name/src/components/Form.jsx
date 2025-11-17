const Form = () => {
    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(e.target.email.value)
    }


    return (
        <form onSubmit={handleSubmit}>
            <input type="email" placeholder="Enter GMail" name="email" required/>

            <br /><br />

            <button type="submit">Submit</button>
        </form>
    )
}

export default Form;