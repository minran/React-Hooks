import React from 'react';
import todosReducer from './todosReducer';
import useReducer from './useReducer';
function Todos() {
	const [todos, dispatch] = useReducer(todosReducer,[{}])

	function handleAddClick (text) {
		dispatch({type: 'add', text})
	}
	console.log(todos);
	return (
		<div>
			<button
				onClick = {() => {
					handleAddClick('textDispatch')
				}}
			>
				dispatch action
			</button>
		</div>
	)
}
export default Todos;