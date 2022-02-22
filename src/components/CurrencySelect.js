import React from 'react';

export default function CurrencySelect(props) {
	return (
		<option value={props.currency}>{props.currency}</option>
	);
}