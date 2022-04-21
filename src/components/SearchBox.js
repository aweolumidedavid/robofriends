import React from "react";

const SearchBox = ({ searchTerm, searchChange }) => {
	return (
		<div className="pa2">
			<input
				className="pa3 pa b--green bg-lightest-blue"
				type="search"
				placeholder="search robots"
				onChange={searchChange}
			/>
		</div>
	);
};

export default SearchBox;
