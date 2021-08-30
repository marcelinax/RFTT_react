import { configureStore } from '@reduxjs/toolkit';
import timelineSlice from './state/timelineSlice';
import runTargetSlice from './state/runTargetSlice';

export default configureStore({
	reducer: {
		timeline: timelineSlice,
		runTarget: runTargetSlice
	},
});
