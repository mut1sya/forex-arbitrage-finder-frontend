import React from 'react';

export default function Path(props) {
	return (
		<tr>
			<td>{props.source}</td>
			<td>{props.destination}</td>
			<td>{props.rate}</td>
			<td>{props.total}</td>
		</tr>
	);
}