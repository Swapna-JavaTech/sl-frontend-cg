import React, { Component } from 'react';
import axios from 'axios';


export default class CreateShoppingList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item_name: '',
            item_qty: '',
            item_category: '',
            item_purchased: false
        }

        this.onChangeItemName = this.onChangeItemName.bind(this);
        this.onChangeItemQty = this.onChangeItemQty.bind(this);
        this.onChangeItemCategory = this.onChangeItemCategory.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChangeItemName(e) {
        this.setState({
            item_name: e.target.value
        });
    }
    onChangeItemQty(e) {
        this.setState({
            item_qty: e.target.value
        });
    }
    onChangeItemCategory(e) {
        this.setState({
            item_category: e.target.value
        });
    }
    onSubmit(e) {
        e.preventDefault();
        
        console.log(`Form submitted:`);
        console.log(`Item Name: ${this.state.item_name}`);
        console.log(`Item Quantity: ${this.state.item_qty}`);
        console.log(`Item Category: ${this.state.item_category}`);
        
        const newShoppingList = {
            item_name: this.state.item_name,
            item_qty: this.state.item_qty,
            item_category: this.state.item_category,
            item_purchased: this.state.item_purchased
        };

        axios.post('http://localhost:4000/shoppinglist/add', newShoppingList)
            .then(res => console.log(res.data));

            this.state = {
                item_name: '',
                item_qty: '',
                item_category: '',
                item_purchased: false
            }
    }
    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Add New Item</h3>
                <form onSubmit={this.onSubmit} style={{ marginTop: 20 }} >
                    <div className="form-group"> 
                        <label>Item Name: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.item_name}
                                onChange={this.onChangeItemName}
                                />
                    </div>
                    <div className="form-group" style={{ marginTop: 20 }}>
                        <label>Item Quantity: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.item_qty}
                                onChange={this.onChangeItemQty}
                                />
                    </div>
                    <div className="form-group" >
                        <div className="form-check form-check-inline" style={{ marginTop: 20 }}>
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="priorityOptions" 
                                    id="priorityLow" 
                                    value="Grocery"
                                    checked={this.state.item_category==='Grocery'} 
                                    onChange={this.onChangeItemCategory}
                                    />
                            <label className="form-check-label">Grocery</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="priorityOptions" 
                                    id="priorityMedium" 
                                    value="Vegetable" 
                                    checked={this.state.item_category==='Vegetable'} 
                                    onChange={this.onChangeItemCategory}
                                    />
                            <label className="form-check-label">Vegetable</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="priorityOptions" 
                                    id="priorityHigh" 
                                    value="Others" 
                                    checked={this.state.item_category==='Others'} 
                                    onChange={this.onChangeItemCategory}
                                    />
                            <label className="form-check-label">Others</label>
                        </div>
                    </div>
                    <div className="form-group" style={{ marginTop: 20 }} >
                        <input type="submit" value="Add Item" className="btn btn-secondary" />
                    </div>
                </form>
            </div>
        )
    }
}