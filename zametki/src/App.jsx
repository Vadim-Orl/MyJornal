import './App.css';
import Header from './components/Header/Header';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import JournalForm from './components/JournalForm/JournalForm';
import JournalList from './components/JournalList/JournalList';
import Body from './layouts/Body/Boby';
import LeftPanel from './layouts/LeftPanel/LeftPanel';
import {useLocalStorage} from './hooks/useLocalStorage';
import { UserContext } from './context/user.context';

function App() {
	const [localStoragePost, SetLocalStoragePost] = useLocalStorage('data');

	const mapItems = (items) => {
		if (!items) {
			return [];
		}
		return items.map(i => ({
			...i,
			date:  new Date(i.date)
		}));
	};
	

	const addItem = item => { 
		SetLocalStoragePost([...mapItems(localStoragePost), {
			text: item.text,
			title: item.title,
			date: new Date(item.date),
			id: localStoragePost > 0 ? Math.max(...localStoragePost.map(i => i.id)) + 1  : 1
		}]);
	};


	return (
		<UserContext.Provider value={{userId: 1}}>
			<div className='app '>
				<LeftPanel>
					<Header/>
					<JournalAddButton/>
					<JournalList items={mapItems(localStoragePost) }/>
				</LeftPanel>
				<Body>
					<JournalForm onSubmit={addItem}/>
				</Body>
			</div>
		</UserContext.Provider>
	);
}

export default App;
