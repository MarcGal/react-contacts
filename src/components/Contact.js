import React, { Component } from 'react';


class Contact extends Component {
  render() {
    const { img, name, popularity} = this.props
    return (
       <li className="contact-elements">
         <img className="img" src={ img } alt=""/>
         <p>{ name }</p>
         <p>{ popularity}</p>
       </li>
    )
  }
}

export default Contact;