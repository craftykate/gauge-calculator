import React from 'react';
import InputFields from '../InputFields/InputFields';

const calculatorDisplay = (props) => (
  <div className="calculator">
    {props.state.errorMessage ?
      <p className="error">
        {props.state.errorMessage}
      </p>
      : null}
    <p className="title">
      What it is:
        <span>(Answer both)</span>
    </p>
    <InputFields
      type="isBig"
      value={props.state.isBig}
      updateValue={props.updateValue} />
    <InputFields
      type="isNeedle"
      value={props.state.isNeedle}
      updateValue={props.updateValue} />
    <hr />
    <p className="title">
      What it should be:
        <span>(Answer one)</span>
    </p>
    <InputFields
      type="shouldBig"
      value={props.state.shouldBig}
      updateValue={props.updateValue}
      placeholder={props.state.shouldNeedle} />
    <InputFields
      type="shouldNeedle"
      value={props.state.shouldNeedle}
      updateValue={props.updateValue}
      placeholder={props.state.shouldBig} />
    <div className="buttonHolder">
      <button
        onClick={props.calculate}
        className="button"
        disabled={!props.state.ready}>
        Calculate
        </button>
      <a
        onClick={props.reset}
        style={{ marginLeft: 20 }}>
        (clear)
        </a>
    </div>
  </div>
);

export default calculatorDisplay;
