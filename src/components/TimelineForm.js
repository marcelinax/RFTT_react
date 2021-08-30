import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTimeline } from '../state/timelineSlice';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';

const TimelineForm = () => {
	const [time, setTime] = useState('');
	const [calories, setCalories] = useState('');
	const [distance, setDistance] = useState('');
	const dispatch = useDispatch();
	const history = useHistory();

	const handleTimeInput = (e) => {
		setTime(e.target.value);
	};
	const handleCaloriesInput = (e) => {
		setCalories(e.target.value);
	};
	const handleDistanceInput = (e) => {
		setDistance(e.target.value);
	};
	const addNewTimeline = () => {
		if (!time) {
			alert('Enter the time!');
			return;
		}
		if (!calories) {
			alert('Enter calories!');
			return;
		}
		if (!distance) {
			alert('Enter a distance!');
			return;
		}
		const regex = /^[0-9]*$/;
		const regex2 = /^[0-9]{2}:[0-9]{2}:[0-9]{2}$/;
		if (regex.test(calories) && regex2.test(time)) {
			dispatch(createTimeline({
				time,
				calories,
				distance
			}));
			history.push('/');
		} else {
			alert('Invalid value');
		}
	};

	return (
		<div className={'timeline-form'}>
			<div className={'timeline-form-box'}>
				<div className={'inputs-box'}>
					<div className={'input-box'}>
						<label>Distance</label>
						<input type={'number'} value={distance} min={0} onChange={handleDistanceInput}/>
					</div>
					<div className={'input-box'}>
						<label>Calories</label>
						<input value={calories} onChange={handleCaloriesInput}/>
					</div>
					<div className={'input-box'}>
						<label>Time</label>
						<input value={time} placeholder={'00:00:00'} onChange={handleTimeInput}/>
					</div>
				</div>
				<div className={'buttons-box'}>
					<button onClick={addNewTimeline}>ADD</button>
					<button onClick={() => {
						history.push('/');
					}}>CANCEL
					</button>

				</div>

			</div>
		</div>
	);
};

export default TimelineForm;