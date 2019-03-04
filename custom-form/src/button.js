import React, { Component } from 'react';

class Button extends Component {
    render() {
        let button = (
            <button>{this.props.btnTxt}</button>
        );
        return button;
    }
}

export default Button;
