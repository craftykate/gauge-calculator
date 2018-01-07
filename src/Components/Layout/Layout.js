import React from 'react';
import Header from '../Header/Header';

const layout = (props) => (
  <React.Fragment>
    <Header />
    <div id="wrapper">
      {props.children}
    </div>
  </React.Fragment>
);

export default layout;