import React from 'react';
import Profile from './Profile';
import photo from './img/icon_timon.png';

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
					<img src={photo} alt="Icon_timon" />;
				</div>
			);
		}
	}


export default App;
