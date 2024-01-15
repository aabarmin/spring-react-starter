import React, {Component} from 'react';
import {
	Avatar,
	Chip,
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
    Toggle,
    Toolbar,
    ToolbarGroup,
    ToolbarSeparator,
    ToolbarTitle
} from "material-ui";
import {connect} from "react-redux";
import {useNavigate} from "react-router-dom";
import PropTypes from 'prop-types';
import {usersLoad} from "../../store/reducers/users/users";
import Paginator from '../shared/Paginator';
import {ImageEdit, NavigationRefresh} from "material-ui/svg-icons/index";

const ToolbarList = (props) => {
    const loading = props.isLoading ?
        <LinearProgress mode="indeterminate" key="progress" /> :
        null;
    
    const toggleStyle = {
    		width: '70px'
    };

    return [
        <Toolbar key="toolbar">
            <ToolbarGroup>
                <ToolbarTitle text="Users" />
            </ToolbarGroup>
                
            <ToolbarGroup>
                <Toggle label="Drafts"
                		style={toggleStyle}
                		toggled={props.isShowDrafts}
                		onToggle={props.onShowDraftsToggle}
                		labelPosition="right" />
                
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
    isShowDrafts: PropTypes.bool.isRequired,
    onShowDraftsToggle: PropTypes.func.isRequired, 
		
    isLoading: PropTypes.bool.isRequired,
    handleCreate: PropTypes.func.isRequired,
    handleRefresh: PropTypes.func.isRequired
};

const UsersTable = (props) => {	
	const idCellStyle = {
			width: '30px'
	};
	const actionsCellStyle = {
			width: '100px'
	};
	const draftIcon = "D";
	
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHeaderColumn style={idCellStyle}>ID</TableHeaderColumn>
                    <TableHeaderColumn>Login</TableHeaderColumn>
                    <TableHeaderColumn style={actionsCellStyle}/>
                </TableRow>
            </TableHeader>
            <TableBody>
                {props.users.map((user) => (
                    <TableRow key={user.id}>
                        <TableRowColumn style={idCellStyle}>{user.id}</TableRowColumn>
                        <TableRowColumn>
                        	<Chip>
                        		<Avatar size={32}>
                        			{user.draft === true ? draftIcon : user.login.substr(0, 2)}
                        		</Avatar>
                            	{user.login}
                            </Chip>
                        </TableRowColumn>
                        <TableRowColumn style={actionsCellStyle}>
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
			pagesTotal: 0,
			showDrafts: false
	};
	
    componentDidMount() {
        this.navigate = useNavigate();
        this._loadUsers();
    }
    
    componentWillReceiveProps(nextProps) {
    	this.setState({
    		pagesTotal: nextProps.userPagesCount
    	});
    }
    
    _loadUsers() {
    	this.props.loadUsers(this.state.currentPage, this.state.showDrafts);
    }
    
    handleCreate() {
        this.navigate('/users/new');
    }

    handleEdit(id) {
        this.navigate('/users/' + id);
    }

    handleRefresh() {
        this._loadUsers();
    }
    
    handlePageChange(page) {
    	this.setState({
    		currentPage: page
    	}, () => {
    		this._loadUsers();
    	});
    }
    
    handleShowDraftsToggle = (event, checked) => {
    	this.setState({
    		showDrafts: !this.state.showDrafts, 
    		currentPage: 0
    	}, () => {
    		this._loadUsers();
    	});
    }

    render() {
        return [
            <ToolbarList key="toolbar"
            			 isShowDrafts={this.state.showDrafts}
                         isLoading={this.props.isLoading}
            			 onShowDraftsToggle={this.handleShowDraftsToggle.bind(this)}
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
    loadUsers: (page, withDrafts) => dispatch(usersLoad(page, withDrafts))
});

export default connect(mapState, mapActions)(UsersList);