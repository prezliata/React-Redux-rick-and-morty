import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Drawer from './components/Drawer/Drawer';
import Characters from './components/Characters/Characters';
import Episodes from './components/Episodes/Episodes'
import Locations from './components/Locations/Locations'
import MyWatchList from './components/MyWatchList/MyWatchList'
import './App.css'

const App = () => {
	return (
		<div className="App">
			<Drawer />
			<Switch>
				<Route exact path="/" component={Characters} />
				<Route exact path="/episodes" component={Episodes} />
				<Route exact path="/locations" component={Locations} />
				<Route exact path="/myWatchList" component={MyWatchList} />
			</Switch>
		</div>
	);
};

export default App;
