import './SelectUser.css';

function SelectUser({changedUser}) {
	const changeUser = e => {
		changedUser(e.target.value);
	};
	
	return (
		<select className='selector' name='user' id='user' onChange={changeUser}>
			<option value="1">Антон</option>
			<option value="2">Вася</option>
		</select>
	);
}

export default SelectUser;