import React, { Component } from 'react';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';

class EquitySlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      equity: 3
    }
  }

  handleOnChange = (value) => {
    this.setState({
      equity: value
    })
  }

  render() {
    let { equity } = this.state
    return (
      <Slider
        min="1"
        max="5"
        step="0.1"
        value={equity}
        orientation="vertical"
        onChange={this.handleOnChange}
      />
    )
  }
}

export default EquitySlider;
