import React from 'react';
import Table from 'react-bootstrap/Table';
import { nanoid } from 'nanoid';

import Path from './Path';

export default function ArbitrageTable(props) {
    
	const tableElements = props.paths.map(path =>(
		<Path 
			key={nanoid()}
			source={path.source}
			destination={path.destination}
			rate={path.rate}
			total={path.total}
		/>
	));
	return (
		<Table striped bordered hover className='p-2 mb-4 bg-light rounded-3'>
			<thead>
				<tr>
					<th>Source Currency</th>
					<th>Destination Currency</th>
					<th>Rate</th>
					<th>Total</th>
				</tr>
			</thead>
			<tbody>
				{tableElements}
			</tbody>
		</Table>
	);
}