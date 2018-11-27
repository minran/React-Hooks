import {
	useState
} from 'react';
import reducer from './todosReducer';
let initialState = {}

function useReducer(reducer, initialState) {
	const [state, setState] = useState(initialState);

	function dispatch(action) {
		console.log(state);
		const nextState = reducer(state, action);
		setState(nextState);
	}
	return [state, dispatch]
}

export default useReducer