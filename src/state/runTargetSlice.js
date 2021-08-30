import { createSlice } from '@reduxjs/toolkit';

const saveRunTargetInLocalStorage = (state) => {
	localStorage.setItem('runTarget', JSON.stringify(state));
};

const loadRunTargetFromLocalStorage = () => {
	return JSON.parse(localStorage.getItem('runTarget') || '');
};


export const runTargetSlice = createSlice({
		name: 'runTarget',
		initalState: {
			runTarget: loadRunTargetFromLocalStorage(),
		},
		reducers: {
			setNewRunTarget: (state, action) => {
				const runTarget = action.payload;
				state.runTarget = runTarget;
				saveRunTargetInLocalStorage(state.runTarget);

			}

		}
	}
);

export const { setNewRunTarget } = runTargetSlice.actions;
export default runTargetSlice.reducer;