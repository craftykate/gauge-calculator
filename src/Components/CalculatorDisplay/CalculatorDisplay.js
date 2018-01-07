import React from 'react';
import InputFields from '../InputFields/InputFields';
import Popup from '../UI/Popup/Popup'; 

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
    <Popup
      show={props.state.showPopup}
      hide={props.hide}>
      <p style={{ fontWeight: 'bold' }}>What it is:</p>
      <p>Fractions okay. Enter with a space, like this: 6 5/8</p>
      <p>Pick a dimension: width, length, etc.</p>
      <p>Enter size in any unit</p>
      <p>The result will be in the same dimension and unit</p>
      <p>Example: if your item is 4" long the calculated results will show the new length in inches</p>
      <p style={{ fontWeight: 'bold' }}>What it should be:</p>
      <p>Answer only one, the blank one will be calculated.</p>
      <p>Erase the filled in one first if you want to switch which one gets calculated</p>
    </Popup>
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
