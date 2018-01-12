import React, { Component } from 'react';
import AutoSuggest from 'react-autosuggest';

import { CITY_DROPDOWN, SERVICES_DROPDOWN } from 'common/constants';
import style from './style';

const searchResults = [
  {
    name: 'C',
    year: 1972
  },
  {
    name: 'Elm',
    year: 2012
  },
  {
    name: 'clm',
    year: 2012
  },
  {
    name: 'Dogs',
    year: 2012
  },
  {
    name: 'Car',
    year: 2012
  }
];
 
class SearchBar extends Component {

	constructor(props){
		super(props);

		this.state = {
			'selectedCity' : CITY_DROPDOWN[0],
			'showCityDropDown': false,
			'selectedService': SERVICES_DROPDOWN[0],
			'showServicesDropDown': false,
			'searchValue': '',
      'searchSuggestions': []
		}
	}

	onSearchInputChange = (event, { newValue }) => {
    this.setState({ 'searchValue': newValue });
  };
 
  // Autosuggest will call this function every time you need to update suggestions. 
  // You already implemented this logic above, so just use it. 
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({ 'searchSuggestions': getSuggestions(value) });
  };
 
  // Autosuggest will call this function every time you need to clear suggestions. 
  onSuggestionsClearRequested = () => {
    this.setState({ 'searchSuggestions': [] });
  };

	// function for rendering all options;
	renderOptions = (opt, dropdownType = 'city') => {
		return opt.map(option => {
			return(
				<li data-value={option.value} key= {option.value} onClick={ e => this.handleListSelect(e, dropdownType==='services' && 'services')}> {option.text} </li>
				)
		})
	}

	// handling toggle of both dropdown.
	handleListToggle = (listType = 'city') => {
		if(listType === 'services') {
			this.setState( { showServicesDropDown: !this.state.showServicesDropDown })
		} else {
			this.setState({ showCityDropDown: !this.state.showCityDropDown })
		}
	}


	// selecting option for list toggle.
	handleListSelect = (event, dropDownType= 'city') => {
		if(dropDownType === 'services') {
			let selectedServiceValue = SERVICES_DROPDOWN.filter(service => service.value === event.target.getAttribute('data-value'));
			this.setState({selectedService: selectedServiceValue[0] });
			this.handleListToggle('services');
		} else {
			let selectedCityValue = CITY_DROPDOWN.filter(city => city.value === event.target.getAttribute('data-value'));
			this.setState({selectedCity: selectedCityValue[0] });
			this.handleListToggle();
		}
	}

	// render function for rendering the search component.
	render = () => {
		const { searchValue, searchSuggestions } = this.state;
 
    // Autosuggest will pass through all these props to the input. 
    const inputProps = {
      placeholder: 'Search Services, Articles, products and more..',
      value: searchValue,
      onChange: this.onSearchInputChange
    };

		return(
				<div className={ style.dropDownContainer }>
					<div className={ style.cityDropDownContainer }>
					<span onClick = {e => this.handleListToggle()}> { this.state.selectedCity.text } </span>
					<ul className={` ${this.state.showCityDropDown ? style.show : style.hide }`}>
						{ this.renderOptions(CITY_DROPDOWN) }
					</ul>
					</div>
					<div className={ style.serviceDropdownContainer }>
					<span onClick = { e => this.handleListToggle('services')} > { this.state.selectedService.text } </span>
					{
						this.state.showServicesDropDown &&
						<AutoSuggest
							suggestions={searchSuggestions}
        			onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        			onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        			getSuggestionValue={getSuggestionValue}
        			renderSuggestion={renderSuggestion}
        			inputProps={inputProps}			
						 />
					}
					<ul className={` ${this.state.showServicesDropDown && !searchValue ? style.show : style.hide}`}>
						{ this.renderOptions(SERVICES_DROPDOWN, 'services') }
					</ul>
					</div>
				</div>
		)
	}

}

export default SearchBar;

// Teach Autosuggest how to calculate suggestions for any given input value. 
const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;
 
  return inputLength === 0 ? [] : searchResults.filter(lang =>
    lang.name.toLowerCase().includes(inputValue) || lang.year.toString().toLowerCase().includes(inputValue)
  );
};
 
// When suggestion is clicked, Autosuggest needs to populate the input 
// based on the clicked suggestion. Teach Autosuggest how to calculate the 
// input value for every given suggestion. 
const getSuggestionValue = suggestion => suggestion.name;
 
// Use your imagination to render suggestions. 
const renderSuggestion = suggestion => (
  <div>
    {suggestion.name}
    /{ suggestion.year}
  </div>
);
