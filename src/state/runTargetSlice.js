import { createSlice } from '@reduxjs/toolkit';

const saveRunTargetInLocalStorage = (state) => {
	localStorage.setItem('runTarget', state);
};

const loadRunTargetFromLocalStorage = () => {
	return localStorage.getItem('runTarget') || '';
};


export const runTargetSlice = createSlice({
		name: 'runTarget',
		initialState: {
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