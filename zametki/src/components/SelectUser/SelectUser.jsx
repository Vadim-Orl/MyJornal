import { useContext } from 'react';
import './SelectUser.css';
import { UserContext } from '../../context/user.context';

function SelectUser() {
	const {userId, setUserId} = useContext(UserContext);
	const changeUser = e => {
		setUserId(Number(e.target.value));
	};
	
	return (
		<select className='selector' name='user' value={userId} id='user' onChange={changeUser}>
			<option value="1">Антон</option>
			<option value="2">Вася</option>
		</select>
	);
}

export default SelectUser;