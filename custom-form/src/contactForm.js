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
                country: {
                    elementType: 'select',
                    elementConfig: {
                        options: [
                            { value: 'pl', displayValue: 'Poland' },
                            { value: 'us', displayValue: 'USA' }
                        ]
                    }
                }
            },
            loading: false
        }
    }

    inputChangeHandler = (e, inputIdentifier) => {
        const updatedOrderForm = {
            ...this.state.orderForm
        };
        const updatedFormElement = {
            ...updatedOrderForm[inputIdentifier] 
        };
        updatedFormElement.value = e.target.value;
        updatedOrderForm[inputIdentifier] = updatedFormElement;
        this.setState({
            orderForm: updatedOrderForm
        });
    }

    submitHandler = (e) => {
        e.preventDefault();
        this.setState({ loading: true });
        const formData = {};
        for ( let formElementId in this.state.orderForm ) {
            formData[formElementId] = this.state.orderForm[formElementId].value
        }
        const finalData = {
            formSubmitData: formData,
            //add data for example came from component props
        }
        //push to database
        console.log(finalData);
    }

    render() {
        const formElementsArray = [];
        for (let key in this.state.orderForm) {
            formElementsArray.push({
                id: key,
                config: this.state.orderForm[key]
            });
        }
        let form = (
            <form onSubmit={this.submitHandler}>
                {formElementsArray.map(formElement => (
                    <Input 
                        key={formElement.id}
                        elementType={formElement.config.elementType} 
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        changed={(e) => this.inputChangeHandler(e, formElement.id)}
                    />
                ))}
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
