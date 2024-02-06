import style from './CardButton.module.css';

function CardButton({children, className}) {
	const cl = `${style['card-button']} ${className ? className : ''}`;

	return (
		<button className={cl}>{children}</button>
	);
}

export default CardButton;
