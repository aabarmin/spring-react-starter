import React from 'react';
import PropTypes from 'prop-types';

import {FlatButton} from 'material-ui';

const Paginator = (props) => {
	const actions = [];
	// if page is first, don't add "Prev" button
	if (props.currentPage > -1) {
		const prevButton = <FlatButton label="Prev" onClick={e => props.onChange(props.currentPage - 1)} />;
		actions.push(prevButton);
	}
	// add interval [current - 3, current - 1]
	const startLeft = Math.max(props.currentPage - 3, 0);
	const startRight = Math.max(props.currentPage - 1, 0);
	for (let i = startLeft; i < startRight; i++) {
		actions.push(<FlatButton label={i} onClick={e => props.onChange(i)} />);
	}
	// add current page
	actions.push(<FlatButton label={props.currentPage + 1} disabled={true} />);
	// add interval [current + 1, current + 3]
	const endLeft = Math.min(props.pagesTotal, props.currentPage + 1);
	const endRight = Math.min(props.pagesTotal, props.currentPage + 3);
	for (let i = endLeft; i < endRight; i++) {
		actions.push(<FlatButton label={i} onClick={e => props.onChange(i)} />);
	}
	// if page is last, don't add "Next" button
	if (props.currentPage == (props.pagesTotal - 1)) {
		const nextButton = <FlatButton label="Next" onClick={e => props.onChange(props.currentPage + 1)} />;	
		actions.push(nextButton);
	}
	return actions;
}

Paginator.propTypes = {
		currentPage: PropTypes.number.isRequired,
		pagesTotal: PropTypes.number.isRequired,
		onChange: PropTypes.func.isRequired
};

export default Paginator;