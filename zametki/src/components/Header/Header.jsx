import './Header.css';
import SelectUser from '../SelectUser/SelectUser';

function Header({changedUser}) {
	const changeUser = e => {
		changedUser(e.target.value);
	};
	
	return (
		<>
			<img className='logo' src='/logo.svg' alt="Personal Journal Logotype" />
			{/* <div className={styles['current-user']}> */}
			{/* <UserPhoto/> */}
			<SelectUser/>
			{/* </div> */}
		</>
	);
}

export default Header;