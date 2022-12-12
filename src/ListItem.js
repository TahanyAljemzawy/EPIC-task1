import React from "react";

const ListItem = ({ body, title }) => {
	return (
		<div className='item__container'>
			<h1 className='item__name'>{title}</h1>
			<p>{body}</p>
		</div>
	);
};

export default ListItem;
