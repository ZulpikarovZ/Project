import logo from "./logo.svg";
import "./App.css";

// Вся разметка html имеет декларативный подход как и функция new Date()
export const App = () => {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
					<br />
					{new Date().getFullYear()}
				</a>
			</header>
		</div>
	);
};
