import React from 'react';
import Profile from './Profile';

class App extends React.Component{
	constructor(props){
		super(props);
			this.state = {
				name: 'tanji',
				bio: 'おうし座A型です',
			};
		}

		render(){
			return(
				<div>
					<h1>React Component Training</h1>
					<Profile name={this.state.name} bio={this.state.bio} />
				</div>
			);
		}
	}


export default App;
