import React, { Component } from 'react';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
	componentWillMount() {
    const config = {
      apiKey: 'AIzaSyDV2d__xukPGa2eyBsRWwt3BiRDsDYlcHo',
      authDomain: 'manager-f5cd8.firebaseapp.com',
      databaseURL: 'https://manager-f5cd8.firebaseio.com',
      projectId: 'manager-f5cd8',
      storageBucket: 'manager-f5cd8.appspot.com',
      messagingSenderId: '279519645328'
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
