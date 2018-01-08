import React from 'react';
import calculations from '../../utils/calculations';

const results = (props) => {
  // simplify calculated variables
  const intendedSize = calculations.undoFraction(props.state.shouldBig);
  // first needle calculations
  const needle = props.state.willBeNeedle;
  const size = parseFloat(props.state.willBeBig.toFixed(1));
  const frac = (size.toString()).includes(".") ? `(${calculations.fractionized(props.state.willBeBig)})` : null;
  const smaller = parseFloat((intendedSize - props.state.willBeBig).toFixed(1));
  // second needle calculations
  const needle1 = props.state.willBeNeedle1;
  const size1 = props.state.willBeBig1 ? parseFloat(props.state.willBeBig1.toFixed(1)) : '';
  const frac1 = (size1.toString()).includes(".") ? `(${calculations.fractionized(props.state.willBeBig1)})` : null;
  const bigger = props.state.willBeBig1 ? parseFloat((props.state.willBeBig1 - intendedSize).toFixed(1)) : '';

  return (
    <div className="result">
      <p className="title">What it will be:</p>
      <p className="needle">Using a <span>{needle}</span> mm needle/hook: </p>
      <p className="units">your item will be <span>{size}</span> {frac} units
        {needle1 ? 
          <span className="difference">({smaller} units smaller)</span>
        : null}
      </p>
      
      {needle1 ?
        <React.Fragment>
          <p className="needle">Using a <span>{needle1}</span> mm needle/hook:</p> 
          <p className="units">your item will be <span>{size1}</span> {frac1} units
            <span className="difference">({bigger} units bigger)</span>
          </p>
          
          <p className="target">Target size: {intendedSize} units</p>
        </React.Fragment>
      : null}
    </div>
  )
};

export default results;
