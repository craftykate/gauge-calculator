import React, { Component } from 'react';
import './App.css';
import Layout from '../Layout/Layout';
import Calculator from '../Calculator/Calculator';

class App extends Component {
  render() {
    return (
      <Layout>
        <Calculator />
      </Layout>
    );
  }
}

export default App;
