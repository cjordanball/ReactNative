import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

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
		return (
			<Provider store={createStore(reducers)}>
				<View>
					<Text>
						Goodbye, Cruel World!
					</Text>
				</View>
			</Provider>
		);
	}
}

export default App;
