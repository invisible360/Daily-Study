import React from 'react';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const Main = () => {
    return (
        <div>

            <FontAwesomeIcon icon={faCoffee} />

            <h1>Daily Study Activity</h1>
            <h3>Select today's Practice</h3>
        </div>
    );
};

export default Main;