import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

import CurrencySelect from './CurrencySelect';

function ArbitrageForm(props) {

	const CURRENCIES = ['AED','AFN','ALL','AMD','AOA','ARS','AUD','AZN','BDT','BGN','BHD','BIF','BIH','BND','BOB','BRL','BSD','BTC','BWP','BYR','CAD','CDF','CHF','CLP','CNY','COP','CRC','CUC','CVE','CZK','DJF','DKK','DOP','DZD','EGP','ERN','ETB','ETH','EUR','FJD','GBP','GEL','GHS','GMD','GNF','GTQ','GYD','HKD','HNL','HRV','HTG','HUF','IDR','ILS','INR','IQD','IRR','ISK','JMD','JOD','JPY','KES','KGS','KHR','KMF','KRW','KYD','KZT','LAK','LBP','LKR','LRD','LSL','LTC','LYD','MAD','MDL','MGA','MKD','MMK','MNT','MOP','MUR','MVR','MWK','MXN','MYR','MZN','NAD','NGN','NIO','NOK','NPR','NZD','OMR','PAB','PEN','PGK','PHP','PKR','PLN','PYG','QAR','RON','RSD','RUB','RWF','SAR','SCR','SDG','SEK','SGD','SLL','SOS','SRD','SSP','STD','SVC','SYP','SZL','THB','TJS','TMT','TND','TRY','TTD','TWD','TZS','UAH','UGX','URY','USD','UZS','VND','XAF','XOF','XPF','XRP','YER','ZAR'];
	const currencySelectList = CURRENCIES.map(currency => (
		< CurrencySelect  key={currency} currency={currency} />
	));

	const [currencyState, setCurrencyState] = useState('');

	async function handleClick(e) {
		e.preventDefault();
		const api_url = process.env.REACT_APP_ARBITRAGE_API_URL ? process.env.REACT_APP_ARBITRAGE_API_URL: 'http://localhost:9000/arbitrage/';
		if (CURRENCIES.includes(currencyState)) {
			const paths = await axios.get(api_url+currencyState);
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