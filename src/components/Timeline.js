import React, { useState } from 'react';
import TimelineItem from './TimelineItem';
import { useDispatch, useSelector } from 'react-redux';
import { setNewRunTarget } from '../state/runTargetSlice';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import moment from 'moment';
import { removeAllTimeline, removeTimeline } from '../state/timelineSlice';


const Timeline = () => {
	const dispatch = useDispatch();
	const [runTarget, setRunTarget] = useState('');
	const runTargetRedux = useSelector(state => state.runTarget.runTarget);
	const history = useHistory();
	const timeline = useSelector(state => state.timeline.timeline);


	const formatDate = () => {
		return moment().format('DD MMM YYYY');
	};

	const handleRunTargetInput = (e) => {
		setRunTarget(e.target.value);
	};

	const checkIfRunTargetIsCompleted = () => {

		const distanceSum = timeline.length > 0 ? timeline.map(t => t.distance).reduce((acc, cur) => acc + cur) : 0;
		return distanceSum < +runTargetRedux;
	};


	const renderTimeline = () => {
		return timeline.map((t, index) => (
			<div
				className={`timeline-box-item  ${index % 2 === 0 ? 'timeline-box-item-right' : 'timeline-box-item-left'} ${!checkIfRunTargetIsCompleted() && index === timeline.length - 1 ? 'timeline-box-item-target-done' : ''}`}
				key={t.id}
				style={{ height: +t.distance * 10 }}>
				<div className={'timeline-box-date'}>
					<p>{formatDate(t.date)}</p>
				</div>
				<TimelineItem time={t.time} calories={t.calories} distance={t.distance} index={index + 1} deleteTimelineItem={() => {
					dispatch(removeTimeline(t.id));
				}}/>
			</div>
		));
	};

	return (
		<div className={'timeline'}>
			<div className={'timeline-menu'}>
				<div className={'timeline-menu-input-box'}>
					<input value={runTarget} type={'number'} min={'0'} onChange={handleRunTargetInput}/>
					<button onClick={() => {
						dispatch(setNewRunTarget(runTarget));
						dispatch(removeAllTimeline());
						setRunTarget('');
					}}>Set run target
					</button>
				</div>

				<button disabled={checkIfRunTargetIsCompleted() ? false : true} onClick={() => {
					history.push('/form');
				}}> Add new run
				</button>
			</div>
			<div className={'timeline-line'} style={{ height: +runTargetRedux.replace(',', '.') * 10 }}>{renderTimeline()}</div>

		</div>
	);
};


export default Timeline;
