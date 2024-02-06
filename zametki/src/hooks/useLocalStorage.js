import { useEffect, useState } from 'react';

// const [items, setItems] = useState(INITIAL_DATA);
const useLocalStorage = (initialState = [], key) => {
	const getData = () => {
		const storage = localStorage.getItem(key);

		if (storage) {
			return JSON.parse(storage);
		}
		return initialState;
	};
	const [value, setValue] = useState(getData);

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(value));
	}, [key, value]);
    

	return [value, setValue];
};

export {useLocalStorage};