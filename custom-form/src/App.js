import React, { Component } from 'react';
import ContactForm from './contactForm'
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Custom Form
        </header>
        <div className="container">
          <div className="formWrapper">
            <ContactForm />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
