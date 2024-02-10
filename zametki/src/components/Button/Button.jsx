import style from'./Button.module.css';

function Button({children}){
	return (
		<button className={`${style['button']} ${style['accent']}`}>{children}</button>
	);
}

export default Button;
