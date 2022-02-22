import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Navbar  from 'react-bootstrap/Navbar';
import ArbitrageTable from './components/ArbitrageTable';
import ArbitrageForm from './components/ArbitrageForm';

import './App.css';

export default function App(props) {

	const [paths, setPaths] = useState(props.paths);

	function populatePaths(newPaths) {
		setPaths(newPaths);
	}

	return(
		<Container className='p-1'>
			<Navbar bg="dark" variant="dark">
				<Container fluid>
					<Navbar.Brand href="#home">
						<img
							alt=""
							src="/logo192.png"
							width="30"
							height="30"
							className="d-inline-block align-top"
						/>
                        Forex Arbitrage Finder
					</Navbar.Brand>
					< ArbitrageForm currencies={props.currencies} populatePaths={populatePaths}/>
				</Container>
			</Navbar>
			<ArbitrageTable paths={paths}/>
		</Container>
	);
}
