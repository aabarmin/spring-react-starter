import React from 'react';
import PropTypes from 'prop-types';
import {AppBar, Drawer, IconButton} from "material-ui";
import {NavigationClose} from "material-ui/svg-icons/index";
import Navigation from "./Navigation";

const Sidebar = (props) => {
    return (
        <Drawer open={props.open}>
            <AppBar iconElementLeft={<IconButton><NavigationClose /></IconButton>}
                    onLeftIconButtonTouchTap={props.handleClose}/>

            <Navigation />
        </Drawer>
    )
};

Sidebar.propTypes = {
    open: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired
};

export default Sidebar;