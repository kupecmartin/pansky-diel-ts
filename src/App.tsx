import React from 'react'
import { Switch, Route } from 'react-router-dom'

// styles & assets
import './App.scss'

// components
import Navigation from './components/Navigation'

// views
import Home from './views/Home'
import Registration from './views/Registration'
import Results from './views/Results'
import Gallery from './views/Gallery'
import Contact from './views/Contact'


function App() {
	return (
		<div className="App">
			<header>
				<Navigation/>
			</header>

			<main className="content">
				<Switch>
					<Route path="/" component={Home} exact/>
					<Route path="/registration" component={Registration} exact/>
					<Route path="/results"component={Results} />
					<Route path="/gallery" component={Gallery}/>
					<Route path="/contact" component={Contact}/>
				</Switch>
			</main>
		</div>
	)
}

export default App
