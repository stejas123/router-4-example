// React modules
import React, { Component } from 'react';
import './styles/style.scss';

class PageNotFound extends Component {
  render() {
    return (
      <div>
	      	<div className="page-not-found main-height">
		        <p>Sorry the page you are looking for doesn't exist.</p>
	        </div>
      </div>
    );
  }
}

export default PageNotFound;
