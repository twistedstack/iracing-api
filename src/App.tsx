import "./App.css";

import ExampleTable from "./components/example-table";

function App() {
	return (
		<div className="App">
			<p>
				iRacing is a racing simulator that lets users race against other
				players at scheduled times. We would like to build a new app
				that displays races that are available to join. This will be a
				table built in React that shows the users some key bits of
				information:
			</p>

			<ul>
				<li>When the race starts</li>
				<li>How many players are registered for the race</li>
				<li>What cars are available to be used</li>
				<li>What track the race is at</li>
				<li>A way to join the session and launch the simulator</li>
			</ul>

			<ExampleTable />

			<h2>Include your table below:</h2>
		</div>
	);
}

export default App;
