import React, { Component } from 'react';

class InputRanges extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maxSal: 0,
      minSal: 0,
      maxEq: 0,
      minEq: 0,
      maxBon: 0,
      minBon: 0,
      maxEd: 0,
      minEd: 0,
      maxPto: 0,
      minPto: 0
    }
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return(
      <div className="InputRanges">
        <div className="InputRangesHeader">
          <p>Please input your value ranges:</p>
        </div>
        <div className="InputRangesForm">
          <form onSubmit={this.handleSubmit}>
            <label>
              Salary: $
              <input type="number" value={this.state.maxSal} onChange={this.handleChange} />
              - $
              <input type="number" value={this.state.minSal} onChange={this.handleChange} />
            </label>
          <br></br>
            <label>
              Equity:
              <input type="number" value={this.state.maxEq} onChange={this.handleChange} />
              -
              <input type="number" value={this.state.minEq} onChange={this.handleChange} />
              %
            </label>
            <br></br>
            <label>
              Bonus: $
              <input type="number" value={this.state.maxBon} onChange={this.handleChange} />
              - $
              <input type="number" value={this.state.minBon} onChange={this.handleChange} />
            </label>
            <br></br>
            <label>
              Skill Development: $
              <input type="number" value={this.state.maxEd} onChange={this.handleChange} />
              - $
              <input type="number" value={this.state.minEd} onChange={this.handleChange} />
            </label>
            <br></br>
            <label>
              Paid Vacation:
              <input type="number" value={this.state.maxPto} onChange={this.handleChange} />
              -
              <input type="number" value={this.state.minPto} onChange={this.handleChange} />
              days
            </label>
            <br></br>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    )
  }
}

export default InputRanges;
