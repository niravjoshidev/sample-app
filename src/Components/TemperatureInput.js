import React, { Component } from 'react'

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
  };

export default class TemperatureInput extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state ={temperature:''};
    }

    handleChange(e) {
        //this.setState({ temperature: e.target.value });
        this.props.onTempratureChange(e.target.value);
    }
    
    render() {
        const temprature = this.props.temprature;
        const scale = thish.props.scale;

        return (
            <fieldset>
                <legend>Enter temprature in {scaleNames[scale]}:</legend>
                <input type="text" value={temprature} onChange={this.handleChange} />
            </fieldset>
        )
  }
}
