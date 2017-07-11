import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
//import { Button } from './Button';
import ChatScreen from './chatscreen';

class HomeScreen extends Component {
	static navigationOptions = {
		title: 'Welcome is the Title of this Page!',
	};
	render() {
		const { navigate } = this.props.navigation;
		return (
			<View>
				<Text>Hello, Chat App!</Text>
				<Button
					onPress={() => navigate('Chat')}
					title="Chat with Mary!"
				/>
			</View>
		)
	}
}

const SimpleApp = StackNavigator({
	Home: { screen: HomeScreen },
	Chat: { screen: ChatScreen }
});

export default SimpleApp;
