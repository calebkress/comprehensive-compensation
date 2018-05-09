import React, { Component } from 'react';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';

class PtoSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pto: 12
    }
  }

  handleOnChange = (value) => {
    this.setState({
      pto: value
    })
  }

  render() {
    let { pto } = this.state
    return (
      <div className="pto">
        <Slider
          min="8"
          max="16"
          step="1"
          value={pto}
          orientation="vertical"
          onChange={this.handleOnChange}
        />
        <div className='PtoValue'>{pto} days</div>
      </div>
    )
  }
}

export default PtoSlider;
