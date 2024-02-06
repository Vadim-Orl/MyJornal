import './Header.css';

function Header() {
	return (
		<>
			<img className='logo' src='/logo.svg' alt="Personal Journal Logotype" />
			{/* <div className={styles['current-user']}>
				<UserPhoto/>
				<SelectUser/>
			</div> */}
		</>
	);
}

export default Header;