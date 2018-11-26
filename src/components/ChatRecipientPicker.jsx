import React, { useState, useEffect} from 'react';
import useFriendStatus from './UseFriendStatus';
const friendList = [
	{ id: 1, name: 'Phoebe' },
	{ id: 2, name: 'Rachel' },
	{ id: 3, name: 'Ross' },
];

let ChatRecipientPicker = () => {
	const [recipientID, setRecipientID] = useState(1);

	const isRecipientOnline = useFriendStatus(recipientID);
	
	let color = isRecipientOnline? 'green' : 'red';
	
	return (
		<div>
			<div style={{
				color: color
			}}>
				test dic
			</div>
			<select
				value = {recipientID}
				onChange =  { e => setRecipientID(Number(e.target.value))}
			>
				{
					friendList.map((item,index)=> (
						<option value={item.id} key={index}>
							{item.name}
						</option>
					))
				}				
			</select>
		</div>
	)
}
export default ChatRecipientPicker