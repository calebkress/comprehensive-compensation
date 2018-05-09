import React, { Component } from 'react';
import SalarySlider from './sliders/SalarySlider';
import EquitySlider from './sliders/EquitySlider';
import PtoSlider from './sliders/PtoSlider';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Comprehensive Compensation</h1>
        </header>
        <div className="Sliders">
          <h3>Salary</h3>
          <SalarySlider />
          <h3>Equity</h3>
          <EquitySlider />
          <h3>PTO</h3>
          <PtoSlider />
        </div>
      </div>
    );
  }
}

export default App;
