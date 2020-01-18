import React from 'react';

class Profile extends React.Component {
	render(){
		return(
			<div className='profile-item'>
				<div className='profile-name'>
					<p>名前：{this.props.name}</p>
				</div>
				<div className='profile-bio'>
			 		<p>紹介文：{this.props.bio}</p>
				</div>
				<img className='profile-image' src={this.props.photo}/>
			</div>
					
		);
	}
}

export default Profile;
