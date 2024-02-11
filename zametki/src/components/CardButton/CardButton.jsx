import style from './CardButton.module.css';

function CardButton({children, className, ...props}) {
	const cl = `${style['card-button']} ${className ? className : ''}`;
	// console.log(className);
	return (
		<button className={cl} {...props}>{children}</button>
	);
}

export default CardButton;
