import React from 'react';
import './Calculator.css';
import Results from '../Results/Results';
import CalculatorDisplay from '../CalculatorDisplay/CalculatorDisplay';

const calculator = (props) => (
  <React.Fragment>
    <a
      className="hint"
      onClick={props.showPopup}>
      (help)
    </a>
    
    <CalculatorDisplay 
      state={props.state}
      updateValue={props.updateValue}
      hide={props.hide}
      calculate={props.calculate}
      reset={props.reset}/>
      
    {props.state.showResults ? 
      <Results 
        state={props.state}/>
    : null}
  </React.Fragment>
);

export default calculator;