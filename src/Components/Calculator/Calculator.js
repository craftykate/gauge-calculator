import React, { Component } from 'react';
import './Calculator.css';
import InputFields from '../InputFields/InputFields';
import Popup from '../UI/Popup/Popup'; 

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {...this.initialState};
  }

  initialState = {
    showPopup: false,
    ready: false,
    errorMessage: null,
    showResults: false,
    isBig: '',
    isNeedle: '',
    shouldBig: '',
    shouldNeedle: '',
    willBeBig: '',
    willBeNeedle: ''
  }

  componentDidUpdate() {
    this.checkReady();
  }

  reset = () => {
    this.setState({...this.initialState})
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

  updateValue = (field, event) => {
    const e = event.target.value;
    if (this.validateEntry(e)) {
      this.setState({
        [field]: e,
        ready: false,
        errorMessage: null,
        showResults: false,
      })
    }
  }

  validateEntry = (value) => {
    // get last character
    const char = value[value.length - 1]
    // test if valid character
    if (/[0-9/. /]/.test(char)) {
      // if it's a slash...
      if (char === '/') {
        // ... and it's the first character, or has a space or slash or period in front, throw error
        if ((value.length === 1) || (/[/. /]/.test(value[value.length - 2]))) {
          this.setState({
            errorMessage: "Invalid slash"
          });
          return false;
        // ... otherwise it's probably fine
        } else {
          return true;
        }
      }
      // acceptable character
      return true;
    } else if (value === '') {
      return true;
    } else {
      this.setState({
        errorMessage: "Only numbers, spaces, forward slashes and periods allowed. Example: 4 1/2 or 5.5"
      });
      return false;
    }
  }

  calculate = () => {
    // calculate what the new size will be
    if (this.state.shouldBig === '') {
      const newSize = (this.state.shouldNeedle / this.state.isNeedle) * this.state.isBig;
      this.setState({
        showResults: true,
        willBeBig: newSize,
        willBeNeedle: this.state.shouldNeedle
      })
    // calculate what the new needle should be
    } else {
      const newNeedle = (this.state.shouldBig / this.state.isBig) * this.state.isNeedle;
      this.setState({
        showResults: true,
        willBeBig: this.state.shouldBig,
        willBeNeedle: newNeedle
      })
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
          {this.state.errorMessage ? 
            <p className="error">
              {this.state.errorMessage}
            </p>
          : null}
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
            <p>Erase the filled in one first if you want to switch which one gets calculated</p>
          </Popup>
          <hr />
          <p className="title">
            What it should be:
            <span>(Answer one)</span>
          </p>
          <InputFields
            type="shouldBig"
            value={this.state.shouldBig}
            updateValue={this.updateValue}
            placeholder={this.state.shouldNeedle}/>
          <InputFields
            type="shouldNeedle"
            value={this.state.shouldNeedle}
            updateValue={this.updateValue}
            placeholder={this.state.shouldBig}/>
          <div className="buttonHolder">
            <button 
              onClick={this.calculate}
              className="button"
              disabled={!this.state.ready}>
              Calculate
            </button>
            <a 
              onClick={this.reset}
              style={{marginLeft: 20}}>
              (clear)
            </a>
          </div>
        </div>
        {this.state.showResults ? 
          <div className="result">
            <p className="title">What it will be:</p>
            <p>Using a <span style={{ fontWeight: 'bold' }}>{this.state.willBeNeedle}</span>mm needle/hook your item will be <span style={{ fontWeight: 'bold' }}>{this.state.willBeBig}</span> units big</p>
          </div>
        : null}
      </React.Fragment>
    )
  }
}

export default Calculator;