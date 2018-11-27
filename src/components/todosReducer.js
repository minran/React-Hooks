function todosReducer(state, action) {
	switch (action.type) {
		case 'add':
			console.log(state);
			return Object.assign({}, ...state, {
				add: {
					text: action.text,
					completed: false
				}
			})
		default:
			return state;
	}
}
export default todosReducer