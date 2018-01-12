import React from 'react';
import { Route } from 'react-router-dom';

// importing common components.
import Header from 'common/header';


export default () => {
	
	let Catergories = require('components/articles/categories').default;
	let Detail = require('components/articles/detail').default;
	let newProps = 
	{
		'test1': 'test1',
		'test2': 'test2'
	}
	

	return(
		<Route  path="/" render={ ({path}) =>(
			<div>
				<Header />
				<Route  path='/' exact component={ require('components/articles').default } />
				<Route path= '/:articleCat' exact render={ (props) => {
					console.log(props);
					if(isNaN(parseInt(props.match.params.articleCat,10))) {
						return (<Catergories {...props } {...newProps}/>)
					} else {
						return (<Detail />);
					 }
					}
				} />
				<Route path='/:articleCat/:articleId'  exact component={require('components/articles/detail').default} />
			</div>
 		)} />
 	)
};