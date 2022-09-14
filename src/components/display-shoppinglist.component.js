import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ShoppingList = props => (
    <tr>
        <td className= {props.shoppinglist.item_name? 'completed' : ''}>{props.shoppinglist.item_name}</td>
        <td className= {props.shoppinglist.item_qty ? 'completed' : ''}>{props.shoppinglist.item_qty}</td>
        <td className= {props.shoppinglist.item_category ? 'completed' : ''}>{props.shoppinglist.item_category}</td>
        <td>
            <Link to={"/edit/"+props.shoppinglist._id}>Edit</Link>
        </td>
    </tr>
)

export default class DisplayShoppingList extends Component {
    constructor(props) {
        super(props);
        this.state = {shoppingList: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/shoppinglist/')
            .then(response => {
                console.log(response.data);
                this.setState({ shoppingList: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    shoppingList() {
        return this.state.shoppingList.map(function(currentShoppingList, i){
            return <ShoppingList shoppinglist={currentShoppingList} key={i} />;
        })
    }

    render() {
        return (
            <div>
                <h3>Shopping List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Item Name</th>
                            <th>Item Quantity</th>
                            <th>Item Category</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.shoppingList() }
                    </tbody>
                </table>
            </div>
        )
    }
}