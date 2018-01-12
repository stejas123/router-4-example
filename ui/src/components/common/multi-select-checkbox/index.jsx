import React, { Component } from 'react';

import './style/multi-select-checkbox';

/*
	This Component requires props from its parent component:
	1. Name for which you are creating multi select dropdown
	2. array of dropdown options
	3. array of already selected options
*/

class MultiSelectCheckbox extends Component {

	constructor(props) {
		super(props);

		/*created state for re-rendering the component when user selects/deselects a option from dropdown*/
		this.state = {
			selectedOption: [],
			toggleDropdown: false
		}

		/*this will create array for all selected options*/
		this.arrayOfSelectedOption = [];
	}

	componentWillMount() {

		const {
			alreadySelectedOptions
		} = this.props;

		if(alreadySelectedOptions && alreadySelectedOptions.length) {

			/* options which are already selected by user */
			alreadySelectedOptions.forEach((opt, index) => {

				/*store index of option in a array*/
		    let indexOfOpt = this.arrayOfSelectedOption.indexOf(opt);

		    /* update array if option is not in the array, then push it in a array otherwise remove from array */
		    if(this.arrayOfSelectedOption.indexOf(opt) === -1) {
		    	this.arrayOfSelectedOption.push(opt);
		    } else {
		    	this.arrayOfSelectedOption.splice(indexOfOpt, 1);
		    }

		    /* update selected options via state */
		    this.setState({
		      'selectedOption': this.arrayOfSelectedOption
		    });
			});
		}
	}

	/* update selected option list */
  updateSelectedOption(option, fieldName) {

  	// store index of option in a array
    let index = this.arrayOfSelectedOption.indexOf(option);

    /* update array if option is not in the array, then push it in a array otherwise remove from array */
    if(this.arrayOfSelectedOption.indexOf(option) === -1) {
    	this.arrayOfSelectedOption.push(option);
    } else {
    	this.arrayOfSelectedOption.splice(index, 1);
    }

    /* update selected options via state */
    this.setState({
      'selectedOption': this.arrayOfSelectedOption
    },() => {

    	this.props.catchSelectedOption(this.state.selectedOption, fieldName);

    });
  }

  /* will return option with ellipsis */
  addEllipsis(option, maxChars, maxCharEllipsis) {
  	return option.substring(0, maxChars-3) + maxCharEllipsis;
  }

   /* function to generate list of selected options */
  generateList(maxCount=30) {
  	let maxChars = maxCount;
		let maxCharEllipsis = "...";
  	let charCount = 0;
  	let countFlag = 0;

  	/* if no any options are selected then show this text */
    if(!this.state.selectedOption.length) {
      return <li className="select-text">{`Select a ${this.props.fieldName}`}</li>;
    }

    /* create show dropdown option list */
    return this.state.selectedOption.map((opt, index) => {
       let option = opt || opt === 0 ? opt.toString() : '';

       if(option) {

		    	/* charCount for showing limited selected options with ellipsis */
		    	charCount = option.length + charCount;

		    	/* if option's charcount is less than 30 then only show in the selected list */
		    	if(charCount < maxChars || index === 0) {

		    		/* if only one option is in a dropdown but its charCount is greater than 30 then show first option with ellipsis */
		    		if(index === 0 && charCount > maxChars) {

		    			return (
				        <li className="option dropdown-text" key={index}>{this.addEllipsis(option, maxChars, maxCharEllipsis)}</li>
				      );

		    		} else {

				      return (
				        <li className="option dropdown-text" key={index}>{option}</li>
				      );
		    		}
		    	}
		    	/* show option with ellipsis and stop the loop */
		    	else {
		    		countFlag += 1;

		    		if(countFlag <= 1) {

		    			return (
				        <li className="option dropdown-text" key={index}>{this.addEllipsis(option, maxChars, maxCharEllipsis)}</li>
				      );
		    		} else {
		    			return false;
		    		}
		  		}
       }
      return true;
    });
  }

	render() {

		let optionList = [];

		/* create option for select dropdown */
		if(this.props.dropdownOptions && this.props.dropdownOptions.length ) {

			optionList = this.props.dropdownOptions.map((option, index) => {

	      return (
	        <option
	        onClick={e => this.updateSelectedOption(option, this.props.name)}
	        className="dropdown-text-style"
	        value={option} id={index} key={index}>{option}</option>
	      );
	    });
		}

		return(
			<div className="select-box-container">
				<ul
					className="options-list selected-options"
					onClick={e => this.setState({ toggleDropdown: !this.state.toggleDropdown })}
				>
					{ this.generateList(this.props.maxCount) }

					<i className="fa fa-caret-down drop-arrow" aria-hidden="true"></i>
				</ul>
				{
					this.state.toggleDropdown ?
					<div>
						<select id="categoryDropdown" className="dropdown"
							value={
							this.state.selectedOption.sort(function (a, b) {
						    return a.toString().toLowerCase().localeCompare(b.toString().toLowerCase());
							})} multiple readOnly>{optionList}
						</select>
					</div>
					:

					null
				}

			{/* this div added to catch the side click for closing select dropdown box on outside click */}
				<div className={this.state.toggleDropdown ? 'side-click-catch' : ''} onClick={e => this.setState({ toggleDropdown: false })}></div>
			</div>
		);
	}
}

export default MultiSelectCheckbox;
