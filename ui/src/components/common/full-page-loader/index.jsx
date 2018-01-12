import React, { Component } from 'react';

import loaderImage from './loading.gif';
import './styles/full-page-loader.scss';

export default class FullPageLoader extends Component {
  render() {
    if(this.props.loading) {
      return (
        <div className="loader-overlay">
          <img className="page-loader" src={loaderImage} />
        </div>
      );
    } else {
      return false;
    }
  }
}
