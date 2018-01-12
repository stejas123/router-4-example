import React, { Component } from 'react';


export default class ExpectingOption extends Component  {
	
	constructor(props) {
		super(props);

		this.state = {
				'selectedWeek' : this.props.selectedWeek,
				'userName': this.props.userName
		}
	}

	// setting new selected item in state
	handleChange = (e) => {
			if(e.target.type === "text"){
				this.setState({userName : e.target.value })
			} else {
				this.setState({ selectedWeek : e.target.value });
			}
	}

	// rendering all the option values in selectList.
	renderOptions = () => {
		let option = [];
			for(let i = 1; i <=38; i++){
				option.push(<option key={i} value={i} > {i} </option> )
			}
		return option;
	}

	submitUpdatedInfo = () => {
		let data = {
			userName : this.state.userName,
			selectedWeek: this.state.selectedWeek 
		}
		this.props.updateLifeStageData(data);
	}

	render = () => {
		console.log(this.props);
	return(
		<div>
			<span><span>Congratulations!</span> How many weeks are you?</span>
			<div>
				<label htmlFor="name" > Tell us your name: </label>
				<input type="text" value={this.state.userName} id="name" onChange ={ e => this.handleChange(e)} />
			</div>
			<div>
				Week: <select onChange={ e => this.handleChange(e) } defaultValue={this.props.selectedWeek} >
					{ this.renderOptions() }
				</select>
			</div>
			<div>
				<button onClick={e => this.submitUpdatedInfo()}>
					Update my information!
				</button>
				<button
					className="disabled"
					disabled
				>
					Skip
				</button>
			</div>
		</div>
		)
	}
}