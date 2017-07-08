import React, { Component } from 'react';
import Firebase from 'firebase';
import { View } from 'react-native';
import { Header, Button, Spinner, CardSection } from './components/common';
import { LoginForm } from './components/LoginForm';

class App extends Component {
	state = {
		loggedIn: null
	};
	componentWillMount() {
		Firebase.initializeApp({
			apiKey: 'AIzaSyBsnKOrhyxHX5NpkonJadCmZkB73tcXZTU',
			authDomain: 'auth-175b9.firebaseapp.com',
			databaseURL: 'https://auth-175b9.firebaseio.com',
			projectId: 'auth-175b9',
			storageBucket: 'auth-175b9.appspot.com',
			messagingSenderId: '751176374097'
		});

		Firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				console.log('yes');
				this.setState({ loggedIn: true });
			} else {
				console.log('no');
				this.setState({ loggedIn: false });
			}
		});
	}

	renderContent() {
		switch (this.state.loggedIn) {
			case true:
				return (
					<CardSection>
						<Button onPress={() => Firebase.auth().signOut()}>
							Log Out
						</Button>
					</CardSection>
				);
			case false:
				return <LoginForm />;
			default:
				return <Spinner size='large' />;
		}
	}

	render() {
		return (
			<View>
				<Header title='Authentication' />
				{this.renderContent()}
			</View>
		);
	}
}

export default App;
