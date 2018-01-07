import React from 'react';

const inputFields = (props) => {
  const fields = [
    {
      type: "isBig",
      title: "How big it is",
      hint: <p>slkdf</p>
    },
    {
      type: "isNeedle",
      title: "Needle/hook used (in mm)",
      hint: <p>akdfjfkjdk</p>
    }
  ]
  const info = fields.find(ele => ele.type === props.type);

  return (
    <div className="inputFields">
      <p>{info.title}:</p>
      <input />
      <p className="hint">
        {info.hint}
      </p>
    </div>
  )
};

export default inputFields;
