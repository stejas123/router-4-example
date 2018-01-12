import React from 'react';
import { Link } from 'react-router-dom';

import { NAVIGATIONS } from 'common/constants';

export default ()=> {

	const createNavigation = () =>{
		return NAVIGATIONS.map((nav)=>{
			return(
				<li key={nav.id}>
					<Link to={nav.url} > {nav.value} </Link>
				</li>
			)
		})
	}

	return (
		<nav>
			<ul>
				{ createNavigation() }
			</ul>
		</nav>
	)
}