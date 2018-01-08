import React from 'react';
import calculations from '../../utils/calculations';

const results = (props) => {
  const intendedSize = calculations.undoFraction(props.state.shouldBig);
  const needle = props.state.willBeNeedle;
  const size = parseFloat(props.state.willBeBig.toFixed(3));
  const needle1 = props.state.willBeNeedle1;
  const size1 = parseFloat(props.state.willBeBig1.toFixed(3));

  return (
    <div className="result">
      <p className="title">What it will be:</p>
      <p className="needle">
        Using a <span>{needle}</span> mm needle/hook: 
      </p>
      <p className="units">
        your item will be <span>{size}</span> units
        {needle1 ? 
          <span className="difference">
            ({intendedSize - size} unit difference)
          </span>
        : null
        }
      </p>
      
      {needle1 ?
        <React.Fragment>
          <p className="needle">
            Using a <span>{needle1}</span> mm needle/hook:
          </p> 
          <p className="units">
            your item will be <span>{size1}</span> units
            <span className="difference">
              ({size1 - intendedSize} unit difference)
            </span>
          </p>
          <p className="target">
            Target size: {calculations.undoFraction(props.state.shouldBig)} units
          </p>
        </React.Fragment>
        : null
      }
    </div>
  )
};

export default results;
