import React from 'react';
import PropTypes from 'prop-types';
import {Dialog, FlatButton, LinearProgress, TextField} from "material-ui";

const LoginDialog = (props) => {
    const actions = [
        <FlatButton primary={true}
                    onClick={props.handleLogin}
                    label="Login" />
    ];

    const progress = props.inProgress ?
        <LinearProgress mode="indeterminate" /> :
        null;

    const error = !props.error ?
        "" : props.error;

    return (
        <Dialog modal={true}
                title="Authentication"
                open={props.open}
                actions={actions}>

            {error}
            <br />

            <TextField floatingLabelText="Login"
                       name="login"
                       onChange={props.handleChange} />

            <TextField floatingLabelText="Password"
                       name="password"
                       type="password"
                       onChange={props.handleChange} />

            {progress}

        </Dialog>
    )
};

LoginDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    inProgress: PropTypes.bool.isRequired,
    error: PropTypes.string,
    handleChange: PropTypes.func.isRequired,
    handleLogin: PropTypes.func.isRequired
};

export default LoginDialog;