import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello'
import useURLLoader from './hooks/useURLLoader'
interface IShowResult {
	message: string;
	status: string;
}
interface IThemeProps {
	[key: string]: { color: string; background: string; }
}

const App: React.FC = () => {
	const [show, setShow] = useState(true)
	const [data, loading] = useURLLoader('https://dog.ceo/api/breeds/image/random', [show])
	const dogResult = data as IShowResult

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					<button onClick={() => { setShow(!show) }}>Refresh Dog</button>
				</p>
				{loading ? <p>讀取中</p>
					: <img src={dogResult && dogResult.message} />
				}
				<Hello message="Hello World" />
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
        </a>
			</header>
		</div>
	);
}

export default App;
