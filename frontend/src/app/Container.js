import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Paper} from "material-ui";

class Container extends Component {
    style = {
        margin: 20,
        padding: 20
    };

    render() {
        return (
            <Paper style={this.style}>
                {<this.props.content />}
            </Paper>
        )
    }
}

Container.propTypes = {
    content: PropTypes.func.isRequired,
    actions: PropTypes.func
};

export default Container;