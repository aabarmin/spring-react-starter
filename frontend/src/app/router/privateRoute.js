import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.authentication.isAuthenticated
    }
};

const mapDispatchToProps = {

};

const privateRoute = (WrappedComponent) => connect(mapStateToProps, mapDispatchToProps)(class extends Component {
    render() {
        if (this.props.isAuthenticated) {
            return <WrappedComponent/>
        }
        return <Redirect to="/login" />
    }
});

export default privateRoute;