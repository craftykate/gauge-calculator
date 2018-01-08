import React from 'react';
import calculations from '../../utils/calculations';

const results = (props) => (
  <div className="result">
    <p className="title">What it will be:</p>
    <p>Using a <span style={{ fontWeight: 'bold' }}>{props.state.willBeNeedle}</span> mm needle/hook your item will be <span style={{ fontWeight: 'bold' }}>{Number(props.state.willBeBig).toString()}</span> units big</p>
    
    {props.state.willBeNeedle1 ?
      <React.Fragment>
        <p>Using a <span style={{ fontWeight: 'bold' }}>{props.state.willBeNeedle1}</span> mm needle/hook your item will be <span style={{ fontWeight: 'bold' }}>{Number(props.state.willBeBig1).toString()}</span> units big</p>
        <p style={{ fontStyle: 'italic' }}>Target size: {Number(calculations.undoFraction(props.state.shouldBig)).toString()} units</p>
      </React.Fragment>
      : null
    }
  </div>
);

export default results;
