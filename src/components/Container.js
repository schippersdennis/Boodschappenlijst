import React, { Component } from "react";
import GroceryList from "./GroceryList";
import ShoppingCart from "./ShoppingCart";

class Container extends Component {
	constructor() {
		super();
		this.state = {
			groceryItems: [
				{ id: 1, title: "Bananen" },
				{ id: 2, title: "Courgette" },
				{ id: 3, title: "Humus" },
				{ id: 4, title: "Brood" },
				{ id: 5, title: "Chips" },
			],
			shoppingCarts: [],
		};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(event) {
		// const itemToAdd = event.target;
		// itemToAdd.remove();
		// this.setState({
		// 	title: itemToAdd.innerHTML,
		// });
	}

	render() {
		return (
			<div>
				<GroceryList groceryItems={this.state.groceryItems} />
				<ShoppingCart />
			</div>
		);
	}
}

export default Container;
