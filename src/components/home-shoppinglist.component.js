import React, { Component } from 'react';
import HomeImage from '../img/shoppinglist.jpg';
const divStyle = {
    width: '88%',
    height: '800px',
    backgroundImage: `url(${HomeImage})`,
    backgroundSize: 'cover' ,
    marginTop : '10px',
    marginLeft : '75px'
  };
export default class HomeShoppingList extends Component {
    render() {
        return (
            <div>
                <div style={divStyle}>
                </div>
            </div>
        )
    }
}