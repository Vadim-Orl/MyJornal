import { useEffect, useState } from 'react';

export function useLocalStorage (key) {
	const [data, setData] = useState();
	useEffect(() => {
		const res = JSON.parse(localStorage.getItem(key));
		if (res) { 
			setData(res);
		} else {
			setData([]);
		}
	}, []); 

	const saveData = (newData) => {
		localStorage.setItem(key, JSON.stringify(newData));
		setData(newData);
	};   

	//каждый хук должен чтото возвращать
	return [data, saveData];

}