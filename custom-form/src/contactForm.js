import React, { Component } from 'react';
import Button from './button';

class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            address: {
                street: '',
                postCode: ''
            },
            loading: false
        }
    }
    render() {
        let form = (
            <form>
                <input type="text" placeholder="Name" value={this.state.name}></input>
                <input type="email" placeholder="E-mail" value={this.state.email}></input>
                <input type="text" placeholder="Street" value={this.state.street}></input>
                <input type="text" placeholder="Post Code" value={this.state.postCode}></input>
                <Button btnTxt='Send' clicked={this.sendHendler} />
            </form>
        );
        // if ( this.state.loading ) {
        //     form = <Spinner />
        // }
        return form;
    }
}

export default ContactForm;
