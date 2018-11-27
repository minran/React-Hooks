import {
	useState
} from 'react';

let useFriendStatus = (friendId) => {
	const [isOnline, setIsOnline] = useState(null)
	if (friendId && friendId === 2) {
		return true
	}
	return friendId ? isOnline : false;
}

export default useFriendStatus