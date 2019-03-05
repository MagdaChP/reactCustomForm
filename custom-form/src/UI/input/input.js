import React from 'react';
import './input.scss';

const input = (props) => {
    let inputElement = null;
    switch (props.elementType) {
        case ('input'):
            inputElement = <input 
                className="inputElement" {...props.elementConfig} 
                value={props.value} />;
            break;
        case ('textarea'):
            inputElement = <textarea 
                className="inputElement" {...props.elementConfig} 
                value={props.value} />;
            break;
        default:
            inputElement = <input 
                className="inputElement" {...props.elementConfig} 
                value={props.value} />
    }
    return (

        <div className="input">
            <label className="label"> {props.label} </label>
            {inputElement}
        </div>);
}


export default input;