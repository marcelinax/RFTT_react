import React from 'react';

const TimelineItem = ({ time, calories, distance }) => {


	return (
		<div className={'timeline-item'}>
			<div className={'timeline-item-top'}>
				{/*<div className={'date-box'}>*/}
				{/*	<i className="bx bx-calendar"></i>*/}
				{/*	<p className={'date'}>{formatDate()}</p>*/}
				{/*</div>*/}
			</div>
			<div className={'timeline-item-main'}>
				<div className={'timeline-item-main-top'}>
					<div className={'timeline-item-main-top-item'}>
						<i className="bx bxs-time"></i>
						<p className={'time'}>{time}</p>
					</div>
					<div className={'timeline-item-main-top-item'}>
						<i className="bx bxs-hot"></i>
						<p className={'calories'}>{calories}</p>
					</div>
				</div>
				<div className={'timeline-item-main-bottom'}>
					<div className={'distance-box'}>
						<i className="bx bx-run"></i>
						<p className={'distance'}>{distance} km</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TimelineItem;