import React, { Component } from 'react';
import { connect } from 'react-redux';

import { onSettingsSubmit, lookupData } from '../../actions';
// import PlayerInfoForm from './PlayerInfoForm';
import SettingsForm from './SettingsForm';
// import SettingsForm from './SettingsForm_multi';

class Settings extends Component{

	componentDidMount(){
		const lookupData = this.props.lookupData();
		console.log('LOOKUPDATA--------->',lookupData);		
	}

	render(){
		return(
			<div>
				<h3>Settings Page</h3>
				<SettingsForm onSettingsSubmit={this.props.onSettingsSubmit} />
			</div>
		);
	}

	

}

const selected = state => {
	return { players: state.settings.players }
}

export default connect(selected,{onSettingsSubmit,lookupData})(Settings);