import React, { useState }  from "react";
import  PropTypes  from "prop-types";


export const AddCategory = ( {setCategories}) =>{

	const [inputValue, setInputValue] = useState('as');

	const handleInputChange = (e)=>{
		setInputValue(e.target.value)
	}
	// onsubmit o onchange es el event
	
	const handleSubmit = (e)=>
	{
		e.preventDefault();
		if (inputValue.trim().length > 2)
		{
			
			setCategories(cats => [ inputValue, ...cats]);
			setInputValue('');
		}
		
	}


	return (
		
		<form onSubmit={ handleSubmit}>
			<input type="text"
				value={inputValue}
				onChange={handleInputChange }>
			
			</input>
		</form>
		
	);
}

AddCategory.propTypes = {
	setCategories: PropTypes.func.isRequired
}

