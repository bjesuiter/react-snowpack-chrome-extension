import React, { useState, useEffect } from 'react';
import './app.css';
import SpinningLogo from '../../components/spinning-logo/spinning-logo';
import { Button } from '@material-ui/core';

function App() {
	// Create the count state.
	const [count, setCount] = useState(0);
	// Create the counter (+1 every second).
	useEffect(() => {
		const timer = setTimeout(() => setCount(count + 1), 1000);
		return () => clearTimeout(timer);
	}, [count, setCount]);
	// Return the App component.
	return (
		<header className="App-header">
			<p>
				Page has been open for <code>{count}</code> seconds.
			</p>
			<SpinningLogo />
			<Button variant="contained" color="primary">
				Hello World
			</Button>
		</header>
	);
}

export default App;
