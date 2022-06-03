import React, { Component } from 'react'
import TemperatureInput from './TemperatureInput';

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

export default class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = { temprature: '', scale: 'C' };
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    }


    handleCelsiusChange(temprature) {
        this.setState({ scale: 'c', temprature });
    }

    handleFahrenheitChange(temprature) {
        this.setState({ scale: 'f', temprature })
    }

    render() {
        const scale = this.state.scale;
        const temprature = this.state.temprature;
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

        return (
            <div>
                <TemperatureInput scale="c" temperature={celsius} onTempratureChanges={this.handleCelsiusChange} />
                <TemperatureInput scale="f" temperature={fahrenheit} onTempratureChanges={this.handleFahrenheitChange} />
            </div>
        )
  }
}
