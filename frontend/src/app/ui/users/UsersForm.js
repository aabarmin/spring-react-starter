import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    Dialog,
    FlatButton, IconButton,
    LinearProgress,
    Paper,
    RaisedButton,
    TextField,
    Toolbar,
    ToolbarGroup,
    ToolbarSeparator,
    ToolbarTitle
} from "material-ui";
import {connect} from "react-redux";
import {userDelete, userLoad, userSave} from "../../store/reducers/users/users";
import {ActionDelete} from "material-ui/svg-icons/index";
import { useNavigate } from 'react-router-dom';

const UserToolbar = (props) => {
    return [
        <Toolbar key="toolbar">
            <ToolbarGroup>
                <ToolbarTitle text="User Edit" />
            </ToolbarGroup>
            <ToolbarGroup>
                <ToolbarSeparator />

                <IconButton onClick={props.handleDelete}>
                    <ActionDelete />
                </IconButton>

                <FlatButton label="Back to list"
                            onClick={props.handleBack} />

                <RaisedButton primary={true}
                              onClick={props.handleSave}
                              label="Save" />
            </ToolbarGroup>
        </Toolbar>,
        props.isLoading ?
            <LinearProgress mode="indeterminate" key="progress" /> :
            null
    ]
};

UserToolbar.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    handleBack: PropTypes.func.isRequired,
    handleSave: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired
};

const UserDeleteDialog = (props) => {
    const actions = [
        <FlatButton label="Cancel"
                    onClick={props.handleCancel}/>,
        <FlatButton label="Ok"
                    onClick={props.handleSubmit}/>
    ];

    return (
        <Dialog modal={true}
                title="Delete user"
                open={props.open}
                actions={actions}>
            Are you sure?
        </Dialog>
    )
};

UserDeleteDialog.propTypes = {
    open: PropTypes.bool.isRequired,

    handleCancel: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
};

const UserForm = (props) => {
    const style = {
        paddingLeft: 20,
        paddingRight: 20
    };

    return (
        <Paper style={style}>
            <TextField key="login"
                       name="login"
                       floatingLabelText="User login"
                       onChange={e => props.handleChange(e)}
                       value={props.user.login} />

            <br />

            <TextField key="password"
                       name="password"
                       type="password"
                       floatingLabelText="User password"
                       onChange={e => props.handleChange(e)}
                       value={props.user.password} />
        </Paper>
    )
};

UserForm.propTypes = {
    handleChange: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired
};

class UsersForm extends Component {
    state = {
        login: "",
        password: "",
        deleteDialogOpen: false
    };

    componentDidMount() {
        this.navigate = useNavigate();
        this.props.userLoad(
            this.props.match.params.id
        );
    }

    componentWillReceiveProps(data) {
        this.setState(data.user)
    }

    handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        });
    }

    handleSave() {
        this.props.userSave(this.state);
    }

    handleBack() {
        this.navigate('/users/');
    }

    deleteDialogShow() {
        this.setState({
            ...this.state,
            deleteDialogOpen: true
        })
    }

    deleteDialogHide() {
        this.setState({
            ...this.state,
            deleteDialogOpen: false
        })
    }

    deleteDialogSubmit() {
        this.props.userDelete(this.state.id);
        this.history.push('/users/');
    }

    render() {
        return [
            <UserToolbar key="toolbar"
                         isLoading={this.props.isLoading}
                         handleDelete={this.deleteDialogShow.bind(this)}
                         handleSave={this.handleSave.bind(this)}
                         handleBack={this.handleBack.bind(this)}/>,

            <UserForm key="form"
                      handleChange={this.handleChange.bind(this)}
                      user={this.state}/>,

            <UserDeleteDialog key="dialog"
                              open={this.state.deleteDialogOpen}
                              handleCancel={this.deleteDialogHide.bind(this)}
                              handleSubmit={this.deleteDialogSubmit.bind(this)}/>
        ]
    }
}

UsersForm.propTypes = {
    isLoading: PropTypes.bool.isRequired,

    userLoad: PropTypes.func.isRequired,
    userSave: PropTypes.func.isRequired,
    userDelete: PropTypes.func.isRequired
};

const mapState = (state) => ({
    user: state.users.currentUser,
    isLoading: state.users.isLoading
});

const mapActions = (dispatch) => ({
    userLoad: (id) => dispatch(userLoad(id)),
    userSave: (data) => dispatch(userSave(data)),
    userDelete: (id) => dispatch(userDelete(id))
});

export default connect(mapState, mapActions)(UsersForm);