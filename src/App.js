import React, { Component } from 'react';
import Qoutes from './containers/Quotes';
import QouteForm from './containers/QuoteForm';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row title justify-content-center" style={{ paddingTop: '12px' }}>
          <h1>Quote Maker</h1>
        </div> 
        <hr />
        <QouteForm />
        <hr />
        <Qoutes />
      </div>
    );
  }
}

export default App;
