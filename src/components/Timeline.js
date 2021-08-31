import React, { useState } from 'react';
import TimelineItem from './TimelineItem';
import { useDispatch, useSelector } from 'react-redux';
import { setNewRunTarget } from '../state/runTargetSlice';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';

import { removeAllTimeline, removeTimeline } from '../state/timelineSlice';


const Timeline = () => {
	const dispatch = useDispatch();
	const [runTarget, setRunTarget] = useState('');
	const runTargetRedux = useSelector(state => state.runTarget.runTarget);
	const history = useHistory();
	const timeline = useSelector(state => state.timeline.timeline);


	const handleRunTargetInput = (e) => {
		setRunTarget(e.target.value);
	};

	const checkIfRunTargetIsCompleted = () => {

		const distanceSum = timeline.length > 0 ? timeline.map(t => +t.distance).reduce((acc, cur) => acc + cur) : 0;
		return distanceSum < +runTargetRedux;
	};


	const renderTimeline = () => {
		return timeline.map((t, index) => (
			<div
				className={`timeline-box-item  ${index % 2 === 0 ? 'timeline-box-item-left' : ''} ${!checkIfRunTargetIsCompleted() && index === timeline.length - 1 ? 'timeline-box-item-target-done' : ''}`}
				key={t.id}
				style={{ height: +t.distance * 40 }}>
				<TimelineItem time={t.time} calories={t.calories} distance={t.distance} deleteTimelineItem={() => {
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
				<p className={checkIfRunTargetIsCompleted() ? 'complete-run-target-alert' : 'complete-run-target-alert--active'}>Congratulations! You've achieved your
					goal.</p>
				<button disabled={checkIfRunTargetIsCompleted() ? false : true} onClick={() => {
					history.push('/form');
				}}> Add new run
				</button>
			</div>
			<div className={'timeline-line'} style={{ height: +runTargetRedux.replace(',', '.') * 40 }}>{renderTimeline()}</div>

		</div>
	);
};


export default Timeline;
