import style from'./Button.module.css';

function Button({text}) {
	return (
		<button className={`${style['button']} ${style['accent']}`}>{text}</button>
	);
}

export default Button;
