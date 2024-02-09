import './JournalItem.css';

function JurnalItem({data}) {
	const {title, date, post} = data;
	console.log(data);
	// console.log(text);

  
	const formatedDate = new Intl.DateTimeFormat('ru-Ru').format(date);

	return (
		<div className='journal-item'>
			<h2 className='journal-item__header'>{title}</h2>
			<h2 className='journal-item__body'>
				<div className='journal-item__date'>{formatedDate}</div>
				<div className='journal-item__text'>{post}</div>
			</h2>
		</div>
	);
}

export default JurnalItem;
