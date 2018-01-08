import React from 'react';
import './Description.css';

const Description = (props) => (
  <div className="description">
    <p className="title">What to do:</p>
    <p>Is your gauge a little off or the size of your item not quite right?</p> 
    <p><span>Enter your current gauge and the needle or hook you used</span> then:</p>
    <ul>
      <li>- <span>Enter what your gauge should be</span> and click calculate to see what needle you should use</li>
  <li>- Or <span>enter which needle you'd like to use</span> to see what your gauge will be!</li>
    </ul>
    <p 
      className="title"
      style={{marginTop: 10}}>
      Tips:
    </p>
    <ul>
      <li>- Whether you're calculating gauge or length or width or circumference it all works the same. Whatever unit you start with is the unit your results will be in.</li>
      <li>- To enter a gauge of 6 sts per 1" or 6 sts per 4" or a length of 6 cm, just enter a 6.</li>
      <li>- Only three fields may be entered at a time. Erase one of the last two to change which gets calculated</li>
      <li>- Fractions okay! Enter them with a space between whole number and fraction like: 4 5/8</li>
    </ul>
    <p className="title">Results: </p>
    <ul>
      <li>- If the results are not a whole number you'll also see it rounded to the nearest 1/8th</li>
      <li>- If the needle needed falls between two needle sizes you'll get results from both those needles and you can decide which one suits you.</li>
    </ul>
  </div>
);

export default Description;
