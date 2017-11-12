import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Form, FormGroup, Col, FormControl, Button} from "react-bootstrap";

class UserEditRow extends Component {
    state = {
        id: 0,
        login: "",
        password: ""
    };

    componentWillMount() {
        // load user data
        this.setState(this.props.user);
    }

    handlePropertyChange(e) {
        var inputName = e.target.name;
        var inputValue = e.target.value;
        this.setState({[inputName]: inputValue});
    }

    handleFormSubmit() {
        this.props.userSave(this.state);
    }

    handleCancelEdit() {
        this.props.userSwitchToRead(this.state.id);
    }

    render() {
        return [
            <tr key="top">
                <td>{this.state.id}</td>
                <td>
                    <FormControl type="text"
                                 name="login"
                                 onChange={e => this.handlePropertyChange(e)}
                                 value={this.state.login}/>
                </td>
            </tr>,
            <tr key="bottom">
                <td colSpan="3">
                    <Form horizontal>
                        <FormGroup>
                            <Col sm={2}>
                                Password
                            </Col>
                            <Col sm={10}>
                                <FormControl type="password"
                                             name="password"
                                             onChange={e => this.handlePropertyChange(e)}
                                             value={this.state.password} />
                            </Col>
                        </FormGroup>

                        <FormGroup>
                            <Col sm={12}>
                                <Button bsStyle="primary"
                                        onClick={(e) => this.handleFormSubmit()}>
                                    Save
                                </Button>

                                <Button bsStyle="default"
                                        onClick={e => this.handleCancelEdit()}>
                                    Cancel
                                </Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </td>
            </tr>
        ]
    }
}

UserEditRow.propTypes = {
    user: PropTypes.shape({
        id: PropTypes.number.isRequired,
        login: PropTypes.string.isRequired
    }).isRequired,
    userSave: PropTypes.func.isRequired,
    userSwitchToRead: PropTypes.func.isRequired
};

export default UserEditRow;