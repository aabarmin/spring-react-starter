import { connect } from 'react-redux';
import { login } from '../../store/reducers/app/auth';
import LoginComponent from "./LoginComponent";

const p = (store) => {
	return {
		inProgress: store.authentication.inProgress
	};
};

const d = (dispatch) => {
	return {
		login: (username, password) => {
			dispatch(login(username, password))
		}
	}
}

export default connect(p, d)(LoginComponent);
