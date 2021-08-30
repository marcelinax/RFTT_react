import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const saveTimelineInLocalStorage = (state) => {
	localStorage.setItem('timeline', JSON.stringify(state));
};

const loadTimelineFromLocalStorage = () => {
	return JSON.parse(localStorage.getItem('timeline') || '[]');
};

export const timelineSlice = createSlice({
	name: 'timeline',
	initialState: {
		timeline: loadTimelineFromLocalStorage(),
	},
	reducers: {
		createTimeline: (state, action) => {
			const { time, distance, calories } = action.payload;
			const newTimeline = {
				time,
				distance,
				calories,
				date: new Date(),
				id: uuidv4(),
			};

			state.timeline = [...state.timeline, newTimeline];
			saveTimelineInLocalStorage(state.timeline);
		},
		removeTimeline: (state, action) => {
			const { id } = action.payload;
			const deleteStartIndex = state.timeline.map(t => t.id).indexOf(id);
			state.timeline.splice(deleteStartIndex, 1);
			state.timeline = [...state.timeline];
			saveTimelineInLocalStorage(state.timeline);
		}

	}
});

export const { createTimeline, removeTimeline } = timelineSlice.actions;
export default timelineSlice.reducer;