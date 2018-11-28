import React, { Component } from 'react';
import PropTypes from 'prop-types';

const ThemeContext =  React.createContext('light');

const Provider = ThemeContext.Provider;
class ContextComponent extends Component {
    static propTypes = {
        className: PropTypes.string,
    };
	
    constructor(props) {
        super(props);
    }

    render() {
        return (
        	<Provider value = 'dark'>
            	<div>test</div>
        	</Provider>
        );
    }
}

export default ContextComponent;
