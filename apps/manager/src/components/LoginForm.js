import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button } from './common';
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
		this.props.loginUser({ email, password });
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
                    />
                </CardSection>
                <CardSection>
                    <Button onPress={() => this.onButtonPress()}>
                        Login
                    </Button>
                </CardSection>
            </Card>
		);
	}
}

    const mapStateToProps = state => (
        {
            email: state.auth.email,
            password: state.auth.password
        }
    );

    export default connect(mapStateToProps, actions)(LoginForm);

