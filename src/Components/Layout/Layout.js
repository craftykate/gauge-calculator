import React from 'react';
import Header from '../Header/Header';

const layout = (props) => (
  <React.Fragment>
    <Header />
    <div className="wrapper">
      {props.children}
    </div>
  </React.Fragment>
);

export default layout;