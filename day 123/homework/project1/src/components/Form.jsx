const Form = () => {

  	const handleSubmit = (e) => {
    	e.preventDefault()

    const inFF = {
      	input1: e.target.in1.value,
      	input2: e.target.in2.value,
      	input3: e.target.in3.value,
      	input4: e.target.in4.value,
    };

    	console.log(inFF);
	}

  	return (
    	<form onSubmit={handleSubmit}>
      		<input type="text" name="in1"/>
      		<input type="text" name="in2"/>
      		<input type="text" name="in3"/>
      		<input type="text" name="in4"/>

      		<button type="submit">Submit</button>
    	</form>
  	);
};

export default Form;