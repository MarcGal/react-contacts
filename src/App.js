import React, { Component } from 'react';
// import logo from './logo.svg';
import Contact from './components/Contact';
import contacts from './data/contacts.json'
import './App.css';

// const fiveContacts = contacts.slice(0, 5);

class App extends Component {

  state = {
    fiveContacts: contacts.slice(0,5),
  }

  addRandomContact = (event) =>{
    const lengthContacts = contacts.length;
    const randomContact = contacts[Math.floor(Math.random() * lengthContacts)];
    this.setState({
      fiveContacts:[...this.state.fiveContacts,randomContact]
    })
  }
  render() {
    console.log(this.state)
    return (
      <div className="App">
        <button onClick={this.addRandomContact}>Add random contact</button>
        <ul>
          { this.state.fiveContacts.map((contact, index) => {
            return < Contact 
            img= { contact.pictureUrl} 
            name={contact.name} 
            key= {index}
            popularity= {contact.popularity}
          />
          }) }
        </ul>
      </div>
    );
  }
}

export default App;
