import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
	const {
		headerContentStyle,
		imageStyle,
		thumbnailContainerStyle,
		headerTextStyle,
		bigImageStyle
	} = styles;
	const { title, artist, thumbnail_image, image, url } = album;
	return (
		<Card>
			<CardSection>
				<View style={thumbnailContainerStyle}>
					<Image style={imageStyle} source={{ uri: thumbnail_image }} />
				</View>
				<View style={headerContentStyle}>
					<Text style={headerTextStyle}>{title}</Text>
					<Text>{artist}</Text>
				</View>
			</CardSection>

			<CardSection>
				<Image style={bigImageStyle} source={{ uri: image }} />
			</CardSection>

			<CardSection>
				<Button buttSqueeze={() => Linking.openURL (url).catch(err => console.log('ERR: ', err))}>
					Buy Now
				</Button>
			</CardSection>
		</Card>
	);
};

const styles = {
	headerContentStyle: {
		flexDirection: 'column',
		justifyContent: 'space-around'
	},
	headerTextStyle: {
		fontSize: 18
	},
	imageStyle: {
		height: 60,
		width: 60,
	},
	bigImageStyle: {
		height: 300,
		flex: 1,
		width: null
	},
	thumbnailContainerStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 10,
		marginRight: 10
	}

};

export default AlbumDetail;
