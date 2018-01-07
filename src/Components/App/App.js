import React, { Component } from 'react';
import Layout from '../Layout/Layout';
import Calculator from '../Calculator/Calculator';
import calculations from '../../utils/calculations';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { ...this.initialState };
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
    willBeNeedle: '',
    willBeBig1: '',
    willBeNeedle1: '',
  }

  componentDidUpdate() {
    this.checkReady();
  }

  reset = () => {
    this.setState({ ...this.initialState })
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
        willBeBig: '',
        willBeNeedle: '',
        willBeBig1: '',
        willBeNeedle1: ''
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
    const isBigDecimal = calculations.undoFraction(this.state.isBig);
    const isNeedleDecimal = calculations.undoFraction(this.state.isNeedle);
    let shouldBigDecimal;
    let shouldNeedleDecimal;
    // calculate what the new size will be
    if (this.state.shouldBig === '') {
      shouldNeedleDecimal = calculations.undoFraction(this.state.shouldNeedle);
      let newSize = ((shouldNeedleDecimal / isNeedleDecimal) * isBigDecimal).toFixed(3);
      this.setState({
        showResults: true,
        willBeBig: newSize,
        willBeNeedle: this.state.shouldNeedle
      })
      // calculate what the new needle should be
    } else {
      shouldBigDecimal = calculations.undoFraction(this.state.shouldBig);
      const newNeedle = ((shouldBigDecimal / isBigDecimal) * isNeedleDecimal);
      const twoNeedles = calculations.returnNeedles(newNeedle);
      let size = [...Array(twoNeedles.length)];
      twoNeedles.forEach((needle, index) => {
        size[index] = ((needle / isNeedleDecimal) * isBigDecimal).toFixed(3);
      })
      // console.log(`needle needed: ${newNeedle}`);
      // console.log(`needles ${twoNeedles}`);
      // console.log(`sizes ${size}`)
      twoNeedles.length === 1 ?
        this.setState({
          showResults: true,
          willBeBig: size[0],
          willBeNeedle: twoNeedles[0]
        })
        : this.setState({
          showResults: true,
          willBeBig: size[0],
          willBeNeedle: twoNeedles[0],
          willBeBig1: size[1],
          willBeNeedle1: twoNeedles[1]
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
