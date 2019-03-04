import React, { Component } from 'react';
import Button from './UI/button';
import Input from './UI/input';

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
                <Input inputtype="input" type="text" placeholder="Name" value={this.state.name}></Input>
                <Input inputtype="email" type="email" placeholder="E-mail" value={this.state.email}></Input>
                <Input inputtype="input" type="text" placeholder="Street" value={this.state.street}></Input>
                <Input inputtype="input" type="text" placeholder="Post Code" value={this.state.postCode}></Input>
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
