import React from 'react';
import classes from './input.scss';

const input = (props) => {
    console.log(props.inputtype)
    let inputElement = null;
    switch (props.inputtype) {
        case ('input'):
            inputElement = <input className={classes.InputElement} {...props} />;
            break;
        case ('textarea'):
            inputElement = <textarea className={classes.InputElement} {...props} />;
            break;
        default:
            inputElement = <input className={classes.InputElement} {...props} />
    }
    return (

        <div className={classes.input}>
            <label className={classes.label}> {props.label} </label>
            {inputElement}
        </div>);
}


export default input;