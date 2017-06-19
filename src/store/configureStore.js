import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from '../reducers';

export default function configureStore() {
	return createStore(
		reducers,
		{},
		applyMiddleware(ReduxThunk)
	);
}
