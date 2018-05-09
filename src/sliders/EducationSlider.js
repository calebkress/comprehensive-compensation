import React, { Component } from 'react';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';

class EducationSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eduBudget: 3000
    }
  }

  handleOnChange = (value) => {
    this.setState({
      eduBudget: value
    })
  }

  render() {
    let { eduBudget } = this.state
    return (
      <div className="eduBudget">
        <Slider
          min="1000"
          max="5000"
          step="100"
          value={eduBudget}
          orientation="vertical"
          onChange={this.handleOnChange}
        />
        <div className='EduBudgetValue'>${eduBudget}</div>
      </div>
    )
  }
}

export default EducationSlider;
