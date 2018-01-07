import React, { Component } from 'react';
import Layout from '../Layout/Layout';
import Calculator from '../Calculator/Calculator';
import calculations from '../../utils/calculations';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { ...this.initialState };
  }

  // set up initial/reset variables so they only need to be entered once
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
    willBeNeedle: '',
    willBeBig1: '',
    willBeNeedle1: '',
  }

  // check with every keystroke or deletion if calculate button should be ready
  componentDidUpdate() {
    this.checkReady();
  }

  // reset variables
  reset = () => {
    this.setState({ ...this.initialState })
  }

  // checks if both required fields are entered and only 1 "should be" variable is entered. Update state to able/disable calculate button only if it has changed
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

  // if what is entered in input field is valid, update the state. 
  // clear error message and hide results if they are showing 
  updateValue = (field, event) => {
    const e = event.target.value;
    if (this.validateEntry(e)) {
      this.setState({
        [field]: e,
        errorMessage: null,
        showResults: false,
      })
    }
  }

  // checks if keystroke is valid, returns true or false
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

  // calculate new needles size(s) and unit size(s) and update state
  calculate = () => {
    const results = calculations.calculateGuage(this.state.isBig, this.state.isNeedle, this.state.shouldBig, this.state.shouldNeedle);
    this.setState({
      showResults: true,
      willBeBig: results[0][0],
      willBeNeedle: results[0][1],
      willBeBig1: results[1][0],
      willBeNeedle1: results[1][1]
    })
  }

  // shows help
  showPopupHandler = () => {
    this.setState({ showPopup: true })
  }

  // hides help
  hidePopupHandler = () => {
    this.setState({ showPopup: false })
  }
  
  render() {
    return (
      <Layout>
        <Calculator 
          showPopup={this.showPopupHandler}
          updateValue={this.updateValue}
          hidePopup={this.hidePopupHandler}
          calculate={this.calculate}
          reset={this.reset}
          state={this.state}/>
      </Layout>
    );
  }
}

export default App;
