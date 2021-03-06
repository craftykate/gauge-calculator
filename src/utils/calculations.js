const calculations = {

  // return decimal version of number
  undoFraction(number) {
    // if the number includes a slash, you'll have to do math
    if (number.includes("/")) {
      let wholeNumber;
      let fraction;
      // if the number includes a space, you'll have to split the numbers up
      if (number.includes(" ")) {
        const splitNumber = number.split(" ");
        wholeNumber = splitNumber[0];
        fraction = splitNumber[1];
      // number just includes a fraction, so set whole number to 0 and set fraction to the whole thing
      } else {
        wholeNumber = 0;
        fraction = number;
      }
      const fractionArray = fraction.split("/")
      const numerator = fractionArray[0];
      const denominator = fractionArray[1];
      const decimal = (numerator / denominator);
      const entireNumber = (Number(wholeNumber) + decimal);
      if (!isNaN(entireNumber)) {
        return entireNumber;
      } else {
        return false;
      }
    // number doesn't include a slash, so return number
    } else {
      return Number(number);
    }
  },

  // returns the whole number as a fraction
  fractionized(number) {
    // turn the decimal part into a fraction
    const fraction = this.returnFraction(number);
    // isolate the number before the decimal
    number = number - (number % 1);
    // if fraction is equal to 1, the fraction is almost 1, so add 1 to number and return it
    if (fraction === 1) {
      return number + 1;
      // if fraction is equal to 0, just return number, no fraction added
    } else if (fraction === "0") {
      return number;
      // otherwise return the number with the fraction
    } else {
      return `${number} ${fraction}`;
    }
  },
  
  // returns the decimal part of the number as a fraction
  returnFraction(number) {
    const decimals = [0, 0.125, 0.25, 0.375, 0.5, 0.625, 0.75, 0.875, 1];
    const fractions = ["0", "1/8", "1/4", "3/8", "1/2", "5/8", "3/4", "7/8", "1"]
    // set up comparison variable
    let lastMargin = 1
    // variable to store closest fraction
    let result = 1;
    // isolate the decimal
    const remainder = number % 1;
    // loop through decimals
    for (let index = 0; index < decimals.length; index++) {
      // find difference between decimal and current decimal from array
      let margin = Math.abs(remainder - decimals[index]);
      // if difference is the same...
      if (margin === 0) {
        // store corresponding fraction and break
        result = fractions[index];
        break;
        // if difference was smaller last time you're going in the wrong direction so store the last number and break
      } else if (lastMargin <= margin) {
        result = fractions[(index - 1)];
        break;
        // you haven't found your number yet so set lastMargin to this one and move on
      } else {
        lastMargin = margin;
      }
    }
    return result;
  },

  // return which neele(s) to use
  returnNeedles(needle) {
    const needlesArray = [2, 2.25, 2.75, 3.25, 3.5, 3.75, 4, 4.5, 5, 5.5, 6, 6.5, 8, 9, 10, 12.75, 15, 16, 19, 25];
    const needle2Index = needlesArray.findIndex(item => item >= needle);
    if (needlesArray[needle2Index] === needle || needle2Index === 0) {
      // perfect match found, or it's the first needle, so return the needle
      return [needlesArray[needle2Index]]
    } else if (needle2Index === -1) {
      // last needle wasn't big enough, so just return last needle
      return [needlesArray[needlesArray.length - 1]]
    } else {
      return [needlesArray[needle2Index - 1], needlesArray[needle2Index]]
    }
  },

  // calculates new needle or size
  calculateGuage(isBig, isNeedle, shouldBig, shouldNeedle) {
    const isBigDecimal = this.undoFraction(isBig);
    const isNeedleDecimal = this.undoFraction(isNeedle);
    let shouldBigDecimal;
    let shouldNeedleDecimal;
    // calculate what the new size will be
    if (shouldBig === '') {
      shouldNeedleDecimal = this.undoFraction(shouldNeedle);
      let newSize = ((shouldNeedleDecimal / isNeedleDecimal) * isBigDecimal);
      return [
        [newSize, shouldNeedle],
        ['', '']
      ]
      // calculate what the new needle should be
    } else {
      shouldBigDecimal = this.undoFraction(shouldBig);
      const newNeedle = ((shouldBigDecimal / isBigDecimal) * isNeedleDecimal);
      const twoNeedles = this.returnNeedles(newNeedle);
      let size = [...Array(twoNeedles.length)];
      twoNeedles.forEach((needle, index) => {
        size[index] = ((needle / isNeedleDecimal) * isBigDecimal);
      });
      if (twoNeedles.length === 1) {
        return [
          [size[0], twoNeedles[0]],
          ['', '']
        ]
      } else {
        return [
          [size[0], twoNeedles[0]],
          [size[1], twoNeedles[1]]
        ]
      }
    }
  }
};

export default calculations;