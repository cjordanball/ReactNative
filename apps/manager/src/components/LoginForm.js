import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button, Spinner } from './common';
import * as actions from '../actions';

class LoginForm extends Component {
	onEmailChange(text) {
		this.props.emailChanged(text);
	}

	onPasswordChange(text) {
		this.props.passwordChanged(text);
	}

	onButtonPress() {
		const { email, password } = this.props;
		if (email && password) {
			this.props.loginUser({ email, password });
		}
	}

	renderButton() {
		if (this.props.loading) {
			return <Spinner size="large" />;
		}
		return (
			<Button onPress={() => this.onButtonPress()}>
				Login
			</Button>
		);
	}

	render() {
		return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder="email@hmail.com"
                        onChangeText={(text) => this.onEmailChange(text)}
                        value={this.props.email}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        secureTextEntry
                        label="Password"
                        placeholder="password"
                        onChangeText={(text) => this.onPasswordChange(text)}
                        value={this.props.password}
                    />
                </CardSection>

				<Text style={styles.errorTextStyle}>
					{this.props.error}
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

const mapStateToProps = ({ auth }) => {
	const { email, password, error, loading } = auth;
	return {
		email,
		password,
		error,
		loading
	};
};

export default connect(mapStateToProps, actions)(LoginForm);

