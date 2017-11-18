import React from 'react';
import {Route} from "react-router-dom";
import UsersList from "./UsersList";
import UsersForm from "./UsersForm";

const UsersPage = (props) => {
    return [
        <Route exact
               path="/users/"
               key="userList"
               component={UsersList} />,
        <Route path="/users/:id"
               key="userFormT"
               component={UsersForm} />
    ]
};

export default UsersPage;