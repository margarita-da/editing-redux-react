import React,{useEffect, useState} from 'react';
import { useDispatch} from 'react-redux';
import { addService, editService} from '../actions/actionCreators';

function ServiceAdd({editItem, setIsEdit, isEdit}) {
    const [input, setInput]= useState()
	const dispatch = useDispatch();

	const handleChange = evt => {
		const {name, value} = evt.target;
		setInput({ ...input, [name]:value});
	}
	useEffect(() => {
		if(isEdit){
			setInput(editItem)
		}else{
			setInput('')
		}
	}, [isEdit, editItem])

	const handleSubmit = evt => {
			evt.preventDefault();
			if(!isEdit){
				dispatch(addService(input.name, input.price));
				setInput('')
			}else{
				dispatch(editService(input.id, input.name, input.price))
			}
			setInput('')
			setIsEdit(false)
	}

		return (
		<form onSubmit={handleSubmit}>
			<input name='name' onChange={handleChange} value={input && input.name} />
			<input name='price' onChange={handleChange} value={input && input.price} />
			<button type='submit'>Save</button>
		</form>
	);
}

export default ServiceAdd;
