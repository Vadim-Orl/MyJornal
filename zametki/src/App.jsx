import './App.css';
import Header from './components/Header/Header';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import JournalForm from './components/JournalForm/JournalForm';
import JournalList from './components/JournalList/JournalList';
import Body from './layouts/Body/Boby';
import LeftPanel from './layouts/LeftPanel/LeftPanel';
import {useLocalStorage} from './hooks/useLocalStorage';
import { UserContextProvider } from './context/user.context';


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
	

	const addItem = item => { 
		SetLocalStoragePost([...mapItems(localStoragePost), {
			...item,
			date: new Date(item.date),
			id: localStoragePost.length > 0 ? Math.max(...localStoragePost.map(i => i.id)) + 1  : 1
		}]);
	};


	return (
		<UserContextProvider>
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
		</UserContextProvider>
	);
}

export default App;
