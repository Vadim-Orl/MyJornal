import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import JournalForm from './components/JournalForm/JournalForm';
import JournalList from './components/JournalList/JournalList';
import Body from './layouts/Body/Boby';
import LeftPanel from './layouts/LeftPanel/LeftPanel';
import {useLocalStorage} from './hooks/useLocalStorage';

function App() {
	const INITIAL_DATA = [
	];

	// const [items, setItems] = useState(INITIAL_DATA);
	const [localStoragePost, SetLocalStoragePost] = useLocalStorage(INITIAL_DATA);


	useEffect(()=> {
		const data = JSON.parse(localStorage.getItem('data'));
		if (data) {
			setItems(data.map(item => ({...item, date: new Date(item.date)})));
		}
	},[]);

	useEffect(() => {
		if (items.length) {
			localStorage.setItem('data', JSON.stringify(items));
		}
	},[items]);

	const addItem = item => { 
		SetLocalStoragePost(oldItems => [...oldItems, {
			text: item.text,
			title: item.title,
			date: new Date(item.date),
			id: oldItems > 0 ? Math.max(...oldItems.map(i => i.id)) + 1  : 1
		}]);
	};


	return (
   
		<div className='app '>
			<LeftPanel>
				<Header/>
				<JournalAddButton/>
				<JournalList items={items}/>
			</LeftPanel>
			<Body>
				<JournalForm addItem={addItem}/>
			</Body>
		</div>
	);
}

export default App;
