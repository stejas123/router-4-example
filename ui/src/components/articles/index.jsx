import React, { Component } from 'react';

import style from './style.scss';

export default class Articles extends Component {
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div className={ style.articleContainer }>
				Hello Article
			</div>
		)
	}

}