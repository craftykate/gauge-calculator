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

  return (
    <div className="inputFields">
      <p>{info.title}:</p>
      <input 
        placeholder={info.placeholder}/>
    </div>
  )
};

export default inputFields;
