import React, { Component } from 'react';
import SalarySlider from './sliders/SalarySlider';
import EquitySlider from './sliders/EquitySlider';
import PtoSlider from './sliders/PtoSlider';
import EducationSlider from './sliders/EducationSlider';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Comprehensive Compensation</h1>
        </header>
        <div className="SliderLabels">
          <h3>Salary</h3>
          <h3>Equity</h3>
          <h3>PTO</h3>
          <h3>Education Budget</h3>
        </div>
        <div className="Sliders">
          <SalarySlider />
          <EquitySlider />
          <PtoSlider />
          <EducationSlider />
        </div>
      </div>
    );
  }
}

export default App;
