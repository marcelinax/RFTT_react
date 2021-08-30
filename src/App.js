import { Provider } from 'react-redux';
import store from './store';
import Timeline from './components/Timeline';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TimelineForm from './components/TimelineForm';

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>

				<Switch>
					<Route path={'/'} exact>
						<Timeline/>
					</Route>
					<Route path={'/form'}>
						<TimelineForm/>
					</Route>
				</Switch>
			</BrowserRouter>

		</Provider>
	);
}

export default App;
