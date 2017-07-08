//@flow

//Place code here for ios

//Import libraries to create components
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

//create a components
const App = () => (
	<View style={{ flex: 1 }}>
		<Header title='Albums' />
		<AlbumList />
	</View>
);

//render the component to the device
AppRegistry.registerComponent('albums', () => App);
