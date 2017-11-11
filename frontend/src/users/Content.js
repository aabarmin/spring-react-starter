import React, { Component } from 'react';

class Content extends Component {
    componentWillMount() {
        this.props.load();
    }

    render() {
        return (
            <div>
                Content
            </div>
        )
    }
}

export default Content;