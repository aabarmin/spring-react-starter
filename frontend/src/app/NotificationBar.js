import React from 'react';
import PropTypes from 'prop-types';
import {Snackbar} from "material-ui";

const NotificationBar = (props) => {
    return (
        <Snackbar open={props.open}
                  autoHideDuration={2000}
                  message={props.message} />
    )
};

NotificationBar.propTypes = {
    open: PropTypes.bool.isRequired,
    message: PropTypes.string.isRequired
};

export default NotificationBar;