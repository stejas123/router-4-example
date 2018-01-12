import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import MainNav from './navigation/main-nav';
import { LOGO } from 'common/constants';
import SearchBar from './navigation/search/';
import LifeStageDropDown from './life-stage-selectPopup';

export default class Header extends Component {


	render(){
		return(
			<div>
				<div>
					<h1>
						<Link to='/' >
							<img src ={ LOGO } alt="Babychakra Logo" />
						</Link>

					</h1>
					<SearchBar />
					<LifeStageDropDown />
				</div>
				<MainNav />
			</div>
		)
	}

}