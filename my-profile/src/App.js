import React from 'react';
import Profile from './Profile';

class App extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			name: '',
			bio: '',
		};
	}
	
	render() {
		return(
			<div>
			<h1>React Component Training</h1>
			<Profile name='tanji' bio='おうし座A型です'
		  />
			</div>
		);
	}
}

export default App;
