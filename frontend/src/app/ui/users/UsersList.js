import React, {Component} from 'react';
import {
    IconButton,
    LinearProgress,
    RaisedButton,
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableFooter, 
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
import Paginator from '../shared/Paginator';
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
            <TableFooter adjustForCheckbox={false}>
	            <TableRow>
	            	<TableRowColumn colSpan={3}>
	            		<Paginator currentPage={props.currentPage}
	            					pagesTotal={props.pagesTotal}
									onChange={props.handlePageChange} />
	            	</TableRowColumn>
	            </TableRow>
            </TableFooter>            
        </Table>
    )
};

UsersTable.propTypes = {
    currentPage: PropTypes.number.isRequired,
    pagesTotal: PropTypes.number.isRequired,
    handlePageChange: PropTypes.func.isRequired,
    
    users: PropTypes.array.isRequired,
    handleEdit: PropTypes.func.isRequired
};

class UsersList extends Component {
	state = {
			currentPage: 0,
			pagesTotal: 0
	};
	
    componentDidMount() {
        this._loadUsers();
    }
    
    componentWillReceiveProps(nextProps) {
    	this.setState({
    		pagesTotal: nextProps.userPagesCount
    	});
    }
    
    _loadUsers() {
    	this.props.loadUsers(this.state.currentPage);
    }
    
    handleCreate() {
        this.props.history.push('/users/new');
    }

    handleEdit(id) {
        this.props.history.push('/users/' + id);
    }

    handleRefresh() {
        this._loadUsers();
    }
    
    handlePageChange(page) {
    	this.setState({
    		currentPage: page
    	});
    	this._loadUsers();
    }

    render() {
        return [
            <ToolbarList key="toolbar"
                         isLoading={this.props.isLoading}
                         handleRefresh={this.handleRefresh.bind(this)}
                         handleCreate={this.handleCreate.bind(this)} />,

            <UsersTable key="list"
                        users={this.props.users}
            			pagesTotal={this.props.userPagesCount}
            			handlePageChange={this.handlePageChange.bind(this)}
            			currentPage={this.state.currentPage}
                        handleEdit={this.handleEdit.bind(this)}/>
        ]
    }
}

UsersList.propTypes = {
    history: PropTypes.object.isRequired,

    isLoading: PropTypes.bool.isRequired,
    users: PropTypes.array.isRequired,
    userPagesCount: PropTypes.number.isRequired,

    loadUsers: PropTypes.func.isRequired
};

const mapState = (state) => ({
    users: state.users.users,
    userPagesCount: state.users.pagesTotal,
    isLoading: state.users.isLoading
});

const mapActions = (dispatch) => ({
    loadUsers: (page) => dispatch(usersLoad(page))
});

export default withRouter(connect(mapState, mapActions)(UsersList));