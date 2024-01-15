import React, {Component} from 'react';
import {List} from "material-ui";
import {ActionSupervisorAccount} from "material-ui/svg-icons/index";
import {Link} from "react-router-dom";

class Navigation extends Component {
    render() {
        return (
            <List>
                <Link to='/users'>
                    <ActionSupervisorAccount/>
                </Link>
            </List>
        )
    }
}

Navigation.propTypes = {
};

export default Navigation;