import './App.css';
import Header from './components/Header/Header';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import JournalForm from './components/JournalForm/JournalForm';
import JournalList from './components/JournalList/JournalList';
import Body from './layouts/Body/Boby';
import LeftPanel from './layouts/LeftPanel/LeftPanel';
import {useLocalStorage} from './hooks/useLocalStorage';
import { UserContextProvider } from './context/user.context';
import { useState } from 'react';


const mapItems = (items) => {
	if (!items) {
		return [];
	}
	return items.map(i => ({
		...i,
		date:  new Date(i.date)
	}));
};

function App() {
	const [localStoragePost, SetLocalStoragePost] = useLocalStorage('data');
	const [selectedItem, setSelectedItem] = useState(null);

	const deleteItem = (id) => {
		SetLocalStoragePost([...localStoragePost.filter(i => i.id !== id)]);

	};

	const addItem = item => { 
		if (!item.id) {
			SetLocalStoragePost([...mapItems(localStoragePost), {
				...item,
				date: new Date(item.date),
				id: localStoragePost.length > 0 ? Math.max(...localStoragePost.map(i => i.id)) + 1  : 1
			}]);
		} else {
			SetLocalStoragePost([...mapItems(localStoragePost).map(i => {
				if (i.id === item.id) {
					return {...item};
				}
				return i;
			})]);
		}
		
	};

	return (
		<UserContextProvider>
			<div className='app '>
				<LeftPanel>
					<Header/>
					<JournalAddButton clearForm={() => setSelectedItem(null)}/>
					<JournalList items={mapItems(localStoragePost)} setItem={setSelectedItem} />
				</LeftPanel>
				<Body>
					<JournalForm onSubmit={addItem} data={selectedItem} deleteItem={deleteItem}/>
				</Body>
			</div>
		</UserContextProvider>
	);
}

export default App;
