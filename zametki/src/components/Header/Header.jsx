import './Header.css';
import SelectUser from '../SelectUser/SelectUser';

function Header() {
	
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