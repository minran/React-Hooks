import React from 'react';
import UseFriendStatus from './UseFriendStatus';


let FriendStatus = (props) => {
	const isOnline = UseFriendStatus(props.friend.id);
	if (isOnline === null) {
		return <p>loading......</p>
	} 
	return isOnline ? <p>Online</p>: <p>Offline</p>;
}
export default FriendStatus