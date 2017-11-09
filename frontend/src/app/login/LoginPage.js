import { connect } from 'react-redux';
import { login } from '../store/reducers/app/auth';
import LoginComponent from "./LoginComponent";

export default connect(
    () => ({}),
    { login }
)(LoginComponent);
