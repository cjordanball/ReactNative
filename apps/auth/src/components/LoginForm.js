import React, { Component } from 'react';
import { Text } from 'react-native';
import Firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {

	state = {
		email: '',
		password: '',
		error: '',
		loading: false
	}

	onButtonPress() {
		this.setState({ error: '', loading: true });
		const { email, password } = this.state;
		Firebase.auth().signInWithEmailAndPassword(email, password)
			.then(() => {
				this.onLoginSuccess();
			})
			.catch(() => {
				console.log('failed to signin');
				Firebase.auth().createUserWithEmailAndPassword(email, password)
					.then(() => {
						this.onLoginSuccess();
					})
					.catch(() => {
						console.log('utter failure');
						this.onLoginFail();
					});
			});
	}

	onLoginSuccess() {
		this.setState({
			email: '',
			password: '',
			error: '',
			loading: false
		});
	}

	onLoginFail() {
		this.setState({
			error: 'Authentication Failed.',
			loading: false
		});
	}

	renderButton() {
		return this.state.loading ? <Spinner size='small' /> : (
			<Button onPress={() => this.onButtonPress()}>
				Log on
			</Button>
		);
	}

	render() {
		const { errorTextStyle } = styles;
		return (
			<Card>
				<CardSection>
					<Input
						placeholder='user@domain.com'
						label='Email'
						value={this.state.email}
						onChangeText={email => this.setState({ email })}
					/>
				</CardSection>
				<CardSection>
					<Input
						secureTextEntry
						placeholder='password'
						label='Password'
						value={this.state.password}
						onChangeText={password => this.setState({ password })}
					/>
				</CardSection>
				<Text style={errorTextStyle}>
					{this.state.error}
				</Text>
				<CardSection>
					{this.renderButton()}
				</CardSection>
			</Card>
		);
	}
}

const styles = {
	errorTextStyle: {
		fontSize: 20,
		alignSelf: 'center',
		color: 'red'
	}
};

export {
	LoginForm
};
