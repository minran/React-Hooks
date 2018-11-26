import UseFriendStatus from './UseFriendStatus';


let FriendStatus = (props) => {
	const isOnline = UseFriendStatus(props.friend.id);
	if (isOnline === null) {
		return 'loading......'
	} 
	return isOnline ? 'Online' : 'Offline';
}
export default FriendStatus