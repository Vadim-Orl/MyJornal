
import './JournalList.css';
import CardButton from '../CardButton/CardButton';
import JurnalItem from '../JournalItem/JournalItem';
import { useContext, useMemo } from 'react';
import { UserContext } from '../../context/user.context';



const sortItems = (a, b) => {
	if (a.date < b.date) {
		return 1;
	} else {
		return -1;
	}
};

function JournalList({items, setItem}) {
	const {userId} = useContext(UserContext);
	const filteredItems = useMemo(() => items
		.filter(i => i.userId === userId)
		.sort(sortItems), [items, userId]
	);

	if(items.length === 0) {
		return (
			<p>Записей нет, добавьте первую</p>
		);
	}

	if (items.length > 0) {
		return (
			<div className='journal-list'>
				{filteredItems.map(el => (
					<CardButton key={el.id} onClick={() => setItem(el)}>
						<JurnalItem data={el} />
					</CardButton>
				))}
			</div>
		);
	}
	
 
}

export default JournalList;
