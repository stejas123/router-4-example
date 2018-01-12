import React, { Component } from 'react';

import { Pagination } from 'react-bootstrap';

import PropTypes from 'prop-types';

// import './style/pagination';

class Paginations extends Component {
  componentWillMount(){
    document.querySelector('body').scrollIntoView();
  }
  render() {
  	return(
      <Pagination
        prev
        next
        first
        last
        ellipsis
        boundaryLinks
        items={this.props.pageCount} //pagination strip
        maxButtons={5}
        activePage={this.props.activePage}
        onSelect={this.props.handleSelect}
      />
  	);
  }
}

Paginations.propTypes = {
  'pageCount': PropTypes.number.isRequired,
  'onSelect': PropTypes.func.isRequired
}

export default Paginations;