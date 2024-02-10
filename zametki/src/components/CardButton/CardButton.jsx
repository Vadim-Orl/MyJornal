import style from './CardButton.module.css';

function CardButton({children, className, onClick}) {
	const cl = `${style['card-button']} ${className ? className : ''}`;

	return (
		<button className={cl} onClick={onClick}>{children}</button>
	);
}

export default CardButton;
