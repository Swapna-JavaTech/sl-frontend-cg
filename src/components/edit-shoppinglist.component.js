import React, { Component } from 'react';
import axios from 'axios';

export default class EditShoppingList extends Component {
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
        this.onChangeItemPurchased = this.onChangeItemPurchased.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:4000/shoppinglist/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    item_name: response.data.item_name,
                    item_qty: response.data.item_qty,
                    item_category: response.data.item_category,
                    item_purchased: response.data.item_purchased
                })   
            })
            .catch(function (error) {
                console.log(error);
            })
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
    onChangeItemPurchased(e) {
        this.setState({
            item_purchased: this.state.item_purchased
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            item_name: this.state.item_name,
            item_qty: this.state.item_qty,
            item_category: this.state.item_category,
            item_purchased: !this.state.item_purchased
        };
        console.log(obj);
        axios.post('http://localhost:4000/shoppinglist/update/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));
        
        this.props.history.push('/');
    }
    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Update Item</h3>
                <form onSubmit={this.onSubmit} style={{ marginTop: 20 }} >
                    <div className="form-group" style={{ marginTop: 20 }} > 
                        <label>Item Name: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.item_name}
                                onChange={this.onChangeItemName}
                                />
                    </div>
                    <div className="form-group" style={{ marginTop: 20 }} >
                        <label>Item Quantity: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.item_qty}
                                onChange={this.onChangeItemQty}
                                />
                    </div>
                    <div className="form-group" style={{ marginTop: 20 }} >
                        <div className="form-check form-check-inline">
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
                        <div className="form-check form-check-inline" >
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
                    <div className="form-check">
                        <input  className="form-check-input"
                                id="completedCheckbox"
                                type="checkbox"
                                name="completedCheckbox"
                                onChange={this.onChangeItemPurchased}
                                checked={this.state.item_purchased}
                                value={this.state.item_purchased}
                                />
                        <label className="form-check-label" htmlFor="completedCheckbox">
                            Completed
                        </label>                        
                    </div>
                    <div className="form-group" style={{ marginTop: 20 }} >
                        <input type="submit" value="Update Item" className="btn btn-secondary" />
                    </div>
                </form>
            </div>
        )
    }
}