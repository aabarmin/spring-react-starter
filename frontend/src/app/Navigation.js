import React, {Component} from 'react';
import {List, ListItem} from "material-ui";
import {ActionSupervisorAccount} from "material-ui/svg-icons/index";
import {withRouter} from "react-router-dom";

const UserItem = withRouter(({history}) => (
    <ListItem leftIcon={<ActionSupervisorAccount/>}
              primaryText="Users"
              onClick={() => {
                  history.push('/users/');
              }} />
));

class Navigation extends Component {
    render() {
        return (
            <List>
                <UserItem />
            </List>
        )
    }
}

Navigation.propTypes = {
};

export default Navigation;