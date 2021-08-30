import React, { useState } from 'react';
import TimelineItem from './TimelineItem';
import { useDispatch, useSelector } from 'react-redux';
import { setNewRunTarget } from '../state/runTargetSlice';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import moment from 'moment';


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

	const renderTimeline = () => {
		return timeline.map(t => (
			<div className={'timeline-box'} key={t.id} style={{ height: +t.distance * 10 }}>
				<div className={'timeline-box-date'}>
					<p>{formatDate(t.date)}</p>
				</div>
				<TimelineItem time={t.time} calories={t.calories} distance={t.distance}/>
			</div>

		));

	};

	return (
		<div className={'timeline'}>
			<div className={'timeline-menu'}>
				<input value={runTarget} onChange={handleRunTargetInput}/>
				<button onClick={() => {
					dispatch(setNewRunTarget(runTarget));
					setRunTarget('');
				}}>Set run target
				</button>
				<button onClick={() => {
					history.push('/form');
				}}>+
				</button>
			</div>
			<div className={'timeline-line'} style={{ height: +runTargetRedux.replace(',', '.') * 10 }}>{renderTimeline()}</div>

		</div>
	);
};

export default Timeline;