import React, { Component } from 'react';
import Button from './UI/button';
import Input from './UI/input/input';

class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orderForm: {
                name: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Your Name'
                    },
                    value: ''
                },
                email: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'email',
                        placeholder: 'Your Email'
                    },
                    value: ''
                },
                street: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Street'
                    },
                    value: ''
                },
                postCode: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Post Code'
                    },
                    value: ''
                },
                deliveryMethod: {
                    elementType: 'select',
                    elementConfig: {
                        options: [
                            { value: 'fastest', displayValue: 'Fastest' },
                            { value: 'cheapest', displayValue: 'Cheapest' }
                        ]
                    }
                }
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
