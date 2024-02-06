
import './JournalList.css';
import CardButton from '../CardButton/CardButton';
import JurnalItem from '../JournalItem/JournalItem';


function JournalList({items}) {
	if(items.length === 0) {
		return (
			<p>Записей нет, добавьте первую</p>
		);
	}

	const sortItems = (a, b) => {
		if (a.date < b.date) {
			return 1;
		} else {
			return -1;
		}
	};

	
	if (items.length > 0) {
		return (
			<div className='journal-list'>
				{items.sort(sortItems).map(el => (
					<CardButton key={el.id}>
						<JurnalItem data={el} />
					</CardButton>
				))}
			</div>
		);
	}
	
 
}

export default JournalList;
