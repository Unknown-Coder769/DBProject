import React from 'react';

import '../App.css';

export const Button = (props) => {

    return (
        <button 
        className={`btn ${props.class ? props.class : ""}`}
        type = {props.type}
        onClick={props.onSubmit}>
            {props.text}
        </button>
    )
}
