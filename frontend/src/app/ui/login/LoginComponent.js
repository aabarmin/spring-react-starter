import React, { Component } from 'react';

import {
    Alert,
    Button,
    Col,
    Form,
    FormControl,
    FormGroup,
    Modal,
    ProgressBar
} from "react-bootstrap";

class LoginComponent extends Component {
    state = {
        username: "",
        password: ""
    };

    handleChange = (e) => {
        var inputName = e.target.name;
        var inputValue = e.target.value;
        this.setState({[inputName]: inputValue});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.login(this.state.username, this.state.password);
    }

    render() {
        // hide component if it's not visible
        if (!this.props.visible) {
            return null;
        }
        // show progress instead of button on login
    	let actionComponent;
    	if (this.props.inProgress) {
    		actionComponent = <ProgressBar active now={100} />
    	} else {
    		actionComponent = <Button bsStyle="primary" type="submit">Login</Button>
    	}
        // show alert message if necessary
    	let loginMessage;
    	if (this.props.loginMessage.length > 0) {
    	    loginMessage = (
    	        <Alert bsStyle="danger">
                    {this.props.loginMessage}
                </Alert>
            )
        } else {
    	    loginMessage = null;
        }
    	
        return (
            <Modal.Dialog>
                <Modal.Header>
                    <Modal.Title>
                        Login page
                    </Modal.Title>
                </Modal.Header>

                <form onSubmit={this.handleSubmit.bind(this)}>
                <Modal.Body>
                    <Form horizontal>
                        {loginMessage}

                        <FormGroup>
                            <Col sm={3}>
                                Login:
                            </Col>
                            <Col sm={9}>
                                <FormControl type="text"
                                             name="username"
                                             onChange={this.handleChange.bind(this)} />
                            </Col>
                        </FormGroup>

                        <FormGroup>
                            <Col sm={3}>
                                Password:
                            </Col>
                            <Col sm={9}>
                                <FormControl type="password"
                                             name="password"
                                             onChange={this.handleChange.bind(this)} />
                            </Col>
                        </FormGroup>
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                	{actionComponent}
                </Modal.Footer>
                </form>
            </Modal.Dialog>
        )
    }
}

export default LoginComponent;