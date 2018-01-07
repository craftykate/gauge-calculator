import React, { Component } from 'react';
import './Calculator.css';
import InputFields from '../InputFields/InputFields';

class Calculator extends Component {
  render() {
    return (
      <div className="calculator">
        <p className="title">
          What it is:
          <span>(Answer both)</span>
        </p>
        <InputFields 
          type="isBig"/>
        <InputFields
          type="isNeedle"/>
      </div>
    )
  }
}

export default Calculator;