import React, {Component} from 'react';
import {
    IconButton,
    LinearProgress,
    RaisedButton,
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
    Toolbar,
    ToolbarGroup,
    ToolbarSeparator,
    ToolbarTitle
} from "material-ui";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import PropTypes from 'prop-types';
import {usersLoad} from "../../store/reducers/users/users";
import {ImageEdit, NavigationRefresh} from "material-ui/svg-icons/index";

const ToolbarList = (props) => {
    const loading = props.isLoading ?
        <LinearProgress mode="indeterminate" key="progress" /> :
        null;

    return [
        <Toolbar key="toolbar">
            <ToolbarGroup>
                <ToolbarTitle text="Users" />
            </ToolbarGroup>
            <ToolbarGroup>
                <ToolbarSeparator />

                <IconButton onClick={props.handleRefresh}>
                    <NavigationRefresh />
                </IconButton>

                <RaisedButton label="Create user"
                              primary={true}
                              onClick={props.handleCreate} />
            </ToolbarGroup>
        </Toolbar>,
        loading
    ]
};

ToolbarList.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    handleCreate: PropTypes.func.isRequired,
    handleRefresh: PropTypes.func.isRequired
};

const UsersTable = (props) => {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHeaderColumn>ID</TableHeaderColumn>
                    <TableHeaderColumn>Login</TableHeaderColumn>
                    <TableHeaderColumn/>
                </TableRow>
            </TableHeader>
            <TableBody>
                {props.users.map((user) => (
                    <TableRow key={user.id}>
                        <TableRowColumn>{user.id}</TableRowColumn>
                        <TableRowColumn>
                            {user.login}
                        </TableRowColumn>
                        <TableRowColumn>
                            <IconButton onClick={e => props.handleEdit(user.id)}>
                                <ImageEdit />
                            </IconButton>
                        </TableRowColumn>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
};

UsersTable.propTypes = {
    users: PropTypes.array.isRequired,
    handleEdit: PropTypes.func.isRequired
};

class UsersList extends Component {
    componentDidMount() {
        this.props.loadUsers();
    }

    handleCreate() {
        this.props.history.push('/users/new');
    }

    handleEdit(id) {
        this.props.history.push('/users/' + id);
    }

    handleRefresh() {
        this.props.loadUsers();
    }

    render() {
        return [
            <ToolbarList key="toolbar"
                         isLoading={this.props.isLoading}
                         handleRefresh={this.handleRefresh.bind(this)}
                         handleCreate={this.handleCreate.bind(this)} />,

            <UsersTable key="list"
                        users={this.props.users}
                        handleEdit={this.handleEdit.bind(this)}/>
        ]
    }
}

UsersList.propTypes = {
    history: PropTypes.object.isRequired,

    isLoading: PropTypes.bool.isRequired,
    users: PropTypes.array.isRequired,

    loadUsers: PropTypes.func.isRequired
};

const mapState = (state) => ({
    users: state.users.users,
    isLoading: state.users.isLoading
});

const mapActions = (dispatch) => ({
    loadUsers: () => dispatch(usersLoad())
});

export default withRouter(connect(mapState, mapActions)(UsersList));