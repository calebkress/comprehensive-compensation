import React, { Component } from 'react';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';

class SalarySlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      salary: 65000
    }
  }

  handleOnChange = (value) => {
    this.setState({
      salary: value
    })
  }

  render() {
    let { salary } = this.state
    return (
      <Slider
        min="50000"
        max="80000"
        step="1000"
        value={salary}
        orientation="vertical"
        onChange={this.handleOnChange}
      />
    )
  }
}

export default SalarySlider;
