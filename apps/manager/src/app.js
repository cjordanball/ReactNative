import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';


class App extends Component {
	componentWillMount() {
		const config = {
			apiKey: 'AIzaSyDU8H7r7BtteWjKVShzT17_gcDi9nk5yDY',
			authDomain: 'manager-e37a1.firebaseapp.com',
			databaseURL: 'https://manager-e37a1.firebaseio.com',
			projectId: 'manager-e37a1',
			storageBucket: 'manager-e37a1.appspot.com',
			messagingSenderId: '703568854518'
		};
		firebase.initializeApp(config);
	}

	render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return (
            <Provider store={store}>
                <LoginForm />
            </Provider>
        );
    }
}

export default App;
