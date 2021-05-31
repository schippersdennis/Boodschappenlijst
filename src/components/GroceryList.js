import React from "react";
import ListItem from "./ListItem";

function GroceryList({ groceryItems }) {
	const updatedGroceryItems = groceryItems.map((item) => {
		return <ListItem key={item.id} item={item} />;
	});
	return (
		<div>
			<h4>Boodschappenlijst</h4>
			<ul>{updatedGroceryItems}</ul>
		</div>
	);
}

export default GroceryList;
