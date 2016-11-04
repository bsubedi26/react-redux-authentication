import React from 'react';
import NavBar from '../containers/NavBar';

export default class App extends React.Component {
	render() {

		return (
				<div>
					<NavBar />
						<div className="container">
							{this.props.children}
						</div>
				</div>
		)
	}
}