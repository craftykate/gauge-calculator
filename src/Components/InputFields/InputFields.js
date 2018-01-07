import React from 'react';

const inputFields = (props) => {
  const fields = [
    {
      type: "isBig",
      title: "How big it is",
      placeholder: "Ex: 6 5/8"
    },
    {
      type: "isNeedle",
      title: "Needle/hook used (in mm)",
      placeholder: "Ex: 3.5"
    },
    {
      type: "shouldBig",
      title: "How big should it be",
      placeholder: "Ex: 7 1/4"
    },
    {
      type: "shouldNeedle",
      title: "Needle/hook to use (in mm)",
      placeholder: "Ex: 4"
    },
  ]
  const info = fields.find(ele => ele.type === props.type);

  let placeholder = null;
  let disabled = false;
  if (props.placeholder) {
    placeholder = "leave blank"
    disabled = true;
  }

  return (
    <div className="inputFields">
      <p>{info.title}:</p>
      <input 
        value={props.value}
        onChange={(event) => props.updateValue(info.type, event)}
        placeholder={placeholder}
        disabled={disabled}/>
    </div>
  )
};

export default inputFields;
