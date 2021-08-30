import React from 'react';

const TimelineItem = ({ time, date, calories, distance }) => {
	return (
		<div className={'timeline-item'}>
			<div className={'timeline-item-top'}>
				<div className={'date-box'}>
					<i className="bx bx-calendar"></i>
					<p className={'date'}>12 Jan 2020</p>
				</div>
			</div>
			<div className={'timeline-item-main'}>
				<div className={'timeline-item-main-top'}>
					<div className={'timeline-item-main-top-item'}>
						<i className="bx bxs-time"></i>
						<p className={'time'}>0:42:22</p>
					</div>
					<div className={'timeline-item-main-top-item'}>
						<i className="bx bxs-hot"></i>
						<p className={'calories'}>240 kcal</p>
					</div>
				</div>
				<div className={'timeline-item-main-bottom'}>
					<div className={'distance-box'}>
						<i className="bx bx-run"></i>
						<p className={'distance'}>10 km</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TimelineItem;