import { useState } from "react";

interface ListItemProp {
	items: string[];
	heading: string;
	onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: ListItemProp) {
	const [selectedIndex, setSelctedIndex] = useState(-1);

	return (
		<>
			<h1>{heading}</h1>

			{items.length === 0 && <p>No items to display</p>}
			<ul className="list-group">
				{items.map((item, index) => {
					return (
						<li
							key={index}
							className={`list-group-item ${
								selectedIndex === index ? "active" : ""
							}`}
							onClick={() => {
								setSelctedIndex(selectedIndex === index ? -1 : index);
								onSelectItem(item);
							}}
						>
							{item}
						</li>
					);
				})}
			</ul>
		</>
	);
}

export default ListGroup;
