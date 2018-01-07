import React, { Component } from 'react';
import './Calculator.css';
import InputFields from '../InputFields/InputFields';
import Popup from '../UI/Popup/Popup'; 

class Calculator extends Component {
  state = {
    showPopup: false,
    ready: false,
    isBig: '',
    isNeedle: '',
    shouldBig: '',
    shouldNeedle: ''
  }

  componentDidUpdate() {
    this.checkReady();
  }

  updateValue = (field, event) => {
    this.setState({
      [field]: event.target.value
    })
  }

  checkReady = () => {
    if (this.state.isBig && this.state.isNeedle) {
      if ((this.state.shouldBig || this.state.shouldNeedle) && !(this.state.shouldBig && this.state.shouldNeedle)) {
        if (this.state.ready === false) {
          this.setState({
            ready: true
          })
        }
      } else if (this.state.ready === true) {
        this.setState({
          ready: false
        })
      }
    }
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
            type="isBig"
            value={this.state.isBig}
            updateValue={this.updateValue}/>
          <InputFields
            type="isNeedle"
            value={this.state.isNeedle}
            updateValue={this.updateValue}/>
          <Popup
            show={this.state.showPopup}
            hide={this.hidePopupHandler}>
            <p style={{fontWeight: 'bold'}}>What it is:</p>
            <p>Fractions okay. Enter with a space, like this: 6 5/8</p>
            <p>Pick a dimension: width, length, etc.</p>
            <p>Enter size in any unit</p>
            <p>The result will be in the same dimension and unit</p>
            <p>Example: if your item is 4" long the calculated results will show the new length in inches</p>
            <p style={{fontWeight:'bold'}}>What it should be:</p>
            <p>Answer only one, the blank one will be calculated.</p>
          </Popup>
          <hr />
          <p className="title">
            What it should be:
            <span>(Answer one)</span>
          </p>
          <InputFields
            type="shouldBig"
            value={this.state.shouldBig}
            updateValue={this.updateValue}/>
          <InputFields
            type="shouldNeedle"
            value={this.state.shouldNeedle}
            updateValue={this.updateValue}/>
          <div className="buttonHolder">
            <button 
              className="button"
              disabled={!this.state.ready}>
              Calculate
            </button>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Calculator;