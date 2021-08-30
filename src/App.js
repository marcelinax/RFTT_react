import { Provider } from 'react-redux';
import store from './store';
import Timeline from './components/Timeline';

function App() {
	return (
		<Provider store={store}>
			<Timeline/>
		</Provider>
	);
}

export default App;
