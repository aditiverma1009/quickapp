import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../redux/Actions';

import InputItems from './InputItems';
import db from './database.json';
import './Login.css';

class Login extends React.Component {
    state = {
        userName: '',
        password: '',
    };

    onChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        });
    }

    onSubmit = () => {
        const { userName, password } = this.state;
        console.log("onSubmit");
        if (password !== '') {
            window.localStorage.login = true;
            this.props.login(userName, password);
            this.props.history.push("/");
        } else {
            alert("Invalid credentials");
        }
    }

    render() {
        const { userName, password } = this.state;
        const { onChange, onSubmit } = this;
        // window.localStorage.login = true;
        if (window.localStorage.login === "true") {
            return (
                <div className="login">
                    <div className="login-border">
                        You are already logged in!! <div className="login-goBack" onClick={() => { window.localStorage.login = true; this.props.history.push('/'); }}>Go back</div>
                    </div>
                </div>
            );
        }

        return (
            <div className="login">
                <div className="login-border">
                    <div className="login-login">
                        LOGIN
                    </div>
                    <div className="login-inputItems">
                        <InputItems
                            name="userName"
                            value={userName}
                            title="User name"
                            type="text"
                            onChange={onChange}
                        />
                        <InputItems
                            name="password"
                            value={password}
                            title="Password"
                            type="password"
                            onChange={onChange}
                        />
                        <button type="button" onClick={onSubmit} className="login-submit">Submit</button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatcherToProps = (dispatch) => ({
    login: (userName, password) => dispatch(login(userName, password))
});

export default connect(null, mapDispatcherToProps)(Login);
