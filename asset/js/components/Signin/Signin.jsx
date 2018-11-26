import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import UserAction from '../../actions/UserAction';
import { FieldGroup } from '../util/Form';

class Signin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit(event) {
        event.preventDefault();
        const { onSignin } = this.props;
        onSignin(this.state);
    }


    render() {
        const { email, password } = this.state;
        return (
            <Grid>
                <h1>Sign in to your account!</h1>
                <form>
                    <FieldGroup
                        id="emailTxt"
                        name="email"
                        label="Email address"
                        type="email"
                        value={email}
                        onChange={this.handleChange}
                        placeholder="Enter email"
                    />
                    <FieldGroup
                        id="passwordTxt"
                        name="password"
                        label="Password"
                        type="password"
                        value={password}
                        onChange={this.handleChange}
                    />
                    <Button type="button" onClick={this.handleSubmit}>Sign in</Button>
                </form>
            </Grid>

        );
    }
}

Signin.propTypes = {
    onSignin: PropTypes.func.isRequired,
};

const mapStateToProps = ({ user }) => ({
    ...user,
});

const mapDispatchToProps = dispatch => ({
    onSignin: (credentials) => {
        dispatch(UserAction.signin(credentials));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
