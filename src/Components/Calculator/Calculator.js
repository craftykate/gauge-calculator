import React, { Component } from 'react';
import './Calculator.css';
import InputFields from '../InputFields/InputFields';
import Popup from '../UI/Popup/Popup'; 

class Calculator extends Component {
  state = {
    showPopup: false
  }

  showPopupHandler = () => {
    this.setState({ showPopup: true })
  }

  hidePopupHandler = () => {
    this.setState({ showPopup: false })
  }
  
  render() {
    return (
      <React.Fragment>
        <a
          className="hint"
          onClick={this.showPopupHandler}>
          (help)
        </a>
        <div className="calculator">
          <p className="title">
            What it is:
            <span>(Answer both)</span>
          </p>
          <InputFields 
            type="isBig"/>
          <InputFields
            type="isNeedle"/>
          <Popup
            show={this.state.showPopup}
            hide={this.hidePopupHandler}>
            <p style={{fontWeight: 'bold'}}>What it is:</p>
            <p>Fractions okay. Enter with a space, like this: 6 5/8</p>
            <p>Pick a dimension: width, length, etc.</p>
            <p>Enter size in any unit - the result will be in the same unit.</p>
            <p style={{fontWeight:'bold'}}>What it should be:</p>
            <p>Answer only one, the blank one will be calculated.</p>
          </Popup>
          <hr />
          <p className="title">
            What it should be:
            <span>(Answer one)</span>
          </p>
          <InputFields
            type="shouldBig" />
          <InputFields
            type="shouldNeedle" />
          <div className="buttonHolder">
            <a 
              className="button">
              Calculate
            </a>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Calculator;