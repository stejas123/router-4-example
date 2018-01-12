
// React components.
import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import ArticleRoutes from './article';
// Creating a function where we can define base route.

export default ()=>{
	return(
		<BrowserRouter>
		<Switch>
			<ArticleRoutes />
			<Route  component={require('common/page-not-found').default} />
		</Switch>
		</BrowserRouter>
	)
}