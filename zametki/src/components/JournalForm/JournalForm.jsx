
import './JournalForm.css';
import Button from '../Button/Button';
import { useContext, useEffect, useReducer, useRef } from 'react';
import { INITIAL_STATE, formReduser } from './JournalFormState';
import { UserContext } from '../../context/user.context';

function JournalForm({onSubmit, data}) {
	const [formState, dispathForm] = useReducer(formReduser, INITIAL_STATE);
	const {isValid, isFormReadyToSubmit, values} = formState;
	const titleRef = useRef();
	const dateRef = useRef();
	const postRef = useRef();
	const {userId} = useContext(UserContext);

	const focusError = (isValid) => {
		switch (true) {
		case !isValid.title:
			titleRef.current.focus();
			break;
		case !isValid.date:
			dateRef.current.focus();
			break;
		case !isValid.post:
			postRef.current.focus();
			break;
		}
	};

	useEffect(() => {
		dispathForm({type: 'SET_VALUE', payload: {...data}});
		// dispathForm({})
	}, [data]);

	useEffect(() => {
		let timerId;
		if (!isValid.date || !isValid.post || !isValid.title) {
			focusError(isValid);
			timerId = setTimeout (() => {
				dispathForm({type: 'RESET_VALIDITY'});
			}, 2000);
		}
		return () => {
			clearTimeout(timerId);
		};
	},[isValid]);
	
	useEffect(() => {
		if (isFormReadyToSubmit) {
			onSubmit(values);
			dispathForm({type: 'CLEAR'});
			dispathForm({type: 'SET_VALUE', payload: {userId}});
		}
	}, [isFormReadyToSubmit, onSubmit, values, userId]);

	useEffect(() => {
		dispathForm({type: 'SET_VALUE', payload: {userId}});
	}, [userId]);
	
	const addJournalItem = (e) => {
		e.preventDefault();
		dispathForm({type: 'SUBMIT'});
	};

	const onChange = (e) => {
		dispathForm({type: 'SET_VALUE', payload: {[e.target.name]: e.target.value}});
	};



	return (
		<form className='journal-form' onSubmit={addJournalItem}>
			{userId}
					
			<div  className='input-title' >
				<input type = 'text' ref={titleRef} onChange={onChange} value={values.title} name='title' className={!isValid.title ? 'invalid' : ''}/>
			</div>
			<div className='form-row'>
				<label className='form-label' htmlFor='date'>
					<img src='/calendar.svg' alt='Календарь'/>
					<span>Дата</span>
				</label>
				<input type = 'date' ref={dateRef} onChange={onChange} value={values.date ? values.date.toISOString().slice(0, 10) : ''} name='date' id='date' className={!isValid.date ? 'invalid' : ''}/>
			</div>
			<div className='form-row'>
				<label className='form-label' htmlFor='tag'>
					<img src='/folder.svg' alt='Метки'/>
					<span>Метки</span>
				</label>
				<input type = 'text' ref={postRef} onChange={onChange} value={values.tag} name='tag' id='tag'/>
			</div>
			<textarea name='post' onChange={onChange} value={values.post} id='' cols='30' rows='10' className={!isValid.post ? 'invalid' : ''} />
			<Button>Сохранить</Button>
		</form> 
	);
}

export default JournalForm;