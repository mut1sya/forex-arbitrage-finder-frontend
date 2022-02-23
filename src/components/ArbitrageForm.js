import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

import CurrencySelect from './CurrencySelect';

function ArbitrageForm(props) {
	const apiUrl = process.env.REACT_APP_ARBITRAGE_API_URL ? process.env.REACT_APP_ARBITRAGE_API_URL: 'http://localhost:9000';

	const [currencyListState, setCurrencyListState] = useState([]);
	const [currencyState, setCurrencyState] = useState('');

	async function populateCurrencies(){
		const allCurrencies = await axios.get(`${apiUrl}/currencies`);
		setCurrencyListState(allCurrencies.data);
	}
	useEffect(() => {
		populateCurrencies();
	}, []);
	
	const currencySelectList = currencyListState.map(currency => (
		< CurrencySelect  key={currency} currency={currency} />
	));

	async function handleClick(e) {
		e.preventDefault();
		if (currencyListState.includes(currencyState)) {
			const paths = await axios.get(`${apiUrl}/arbitrage/${currencyState}`);
			props.populatePaths(paths.data);
		} else {
			props.populatePaths([]);
		}
        
	}

	function handleChange(e) {
		setCurrencyState(e.target.value);
	}

	return (
		<Form className="d-flex" >
			<Form.Select aria-label="Default select example" size='sm' onChange={handleChange}>
				<option>Select base currency</option>
				{currencySelectList}
			</Form.Select>
			<Button variant="outline-light" onClick={handleClick} >Search</Button>
		</Form>
	);
}

export default ArbitrageForm;