import React from 'react';
import moment from 'moment';

const TimelineItem = ({ time, calories, distance, deleteTimelineItem, date }) => {
	const formatDate = () => {
		return moment().format('DD MMM YYYY');
	};

	return (
		<div className={'timeline-item'}>

			<div className={'timeline-item-date-box'}>
				<p className={'date'}>{formatDate(date)}</p>
			</div>
			<div className={'timeline-item-info-box'}>
				<h3>{distance} km</h3>
				<div className={'timeline-item-info-box-other-information'}>
					<p>{calories} calories, {time}</p>
				</div>
			</div>
			<i className="bx bx-x delete-btn" onClick={deleteTimelineItem}></i>
		</div>
	);
};

export default TimelineItem;